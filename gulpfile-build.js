const gulp = require('gulp')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const rev = require('gulp-rev')

const revCollector = require('gulp-rev-collector')

const sequence = require('gulp-sequence')

const del = require('del')

const uglify = require('gulp-uglify')
const minifyCSS = require('gulp-minify-CSS')
const minifyHTML = require('gulp-minify-html')

const babel =  require('gulp-babel')

gulp.task('server',()=>{
    return gulp.src('./dist')
    .pipe(server({
        host:'localhost',
        port:8000,
        livereload:true,
        directoryListing:{
            enable:true,
            path: './dist'
        },
        middleware:[
            proxy('/api',{
                target:'http://localhost:9000',
                changeOrigin:true,
            })
        ]
    }))
})

gulp.task('scss',()=>{
    return gulp.src('./src/styles/app.scss')
     .pipe(sass().on('error',sass.logError))
     .pipe(rev())
     .pipe(minifyCSS())
     .pipe(gulp.dest('./dist/styles'))
     .pipe(rev.manifest())
     .pipe(gulp.dest('./dist/rev/styles'))
})

gulp.task('js',()=>{
    return gulp.src('./src/scripts/app.js')
     .pipe(webpack({
         
         entry:'./src/scripts/app.js',
         output:{
             filename: 'app.js'
         }
     }))
     .pipe(babel({
         presets:['env']
     }))
     .pipe(uglify())     
     .pipe(rev())
     .pipe(gulp.dest('./dist/scripts'))
     .pipe(rev.manifest())
     .pipe(gulp.dest('./dist/rev/scripts'))
})


gulp.task('copyhtml',()=>{
    return gulp.src(['./*.html','./dist/rev/**/*.json'])
    .pipe(revCollector({
        replaceRaved:true  
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'))
     
})

gulp.task('copylibs',()=>{
    return gulp.src(['./src/libs/*.js'])
     .pipe(gulp.dest('./dist/libs'))
})

gulp.task('clear',del.bind(null,['./dist/**/*'],{
    force:true
}))
 
gulp.task('default',(cb)=>{
    sequence('clear',['js','scss'],['copyhtml','copylibs'])(cb)
    console.log('done.')
})
 
