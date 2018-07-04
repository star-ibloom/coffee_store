const gulp = require('gulp')

const server = require('gulp-webserver')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const babel =  require('gulp-babel')



gulp.task('server',()=>{
    return gulp.src('./dev')
    .pipe(server({
        host: 'localhost',
        port: 8000,
        livereload: true,
        directoryListing: {
          enable: true,
          path: './dev'
        },
        middleware:[
            proxy('/api',{
                target:'http://localhost:9000',
                changeOrigin:true,
            }),

            proxy('/vm',{
                target:'https://m.vmall.com',
                changeOrigin:true,
                pathRewrite :{
                    '^/vm':''
                }
            })
            // http://m.vmall.com/content/index/more.json?pageNumber=2&contentType=2
        ]
    }))
})

gulp.task('scss',()=>{
    return gulp.src('./src/styles/*.scss')
     .pipe(sass().on('error',sass.logError))

     .pipe(gulp.dest('./dev/styles'))

})

gulp.task('js',()=>{
    return gulp.src('./src/scripts/*.js')
    //  .pipe(webpack({         
    //      entry:'./src/scripts/app.js',
    //      output:{
    //          filename: 'app.js'
    //      },
    //      module:{
    //          loaders:[
    //              {test:/\.html$/, loader:'string-loader'},
    //          ]
    //      }
    //  }))
    .pipe(webpack({
        entry: {
        //   app: './src/scripts/app.js',
          'app-welcome': './src/scripts/app-welcome.js',
          'app-home': './src/scripts/app-home.js',
          'app-login': './src/scripts/app-login.js',
          'app-order': './src/scripts/app-order.js'
        },
        output: {
          filename: '[name].js'
        },
        module: {
          loaders: [
            { test: /\.html$/, loader: 'string-loader' },
          ],
        }
      }))
      .pipe(babel({
        presets:['env']
    }))
      .pipe(gulp.dest('./dev/scripts'))
  })
  
//      .pipe(babel({
//          presets:['env']
//      }))  
//      .pipe(gulp.dest('./dev/scripts'))

// })


gulp.task('copyhtml',()=>{
    return gulp.src(['./*.html'])
    .pipe(gulp.dest('./dev'))
     
})

gulp.task('copylibs',()=>{
    return gulp.src(['./src/libs/*.js'])
     .pipe(gulp.dest('./dev/libs'))
}) 

gulp.task("copystatic", () => {
    return gulp.src("./src/static/**/*").pipe(gulp.dest("./dev/static"))
  })

gulp.task('watch',()=>{
    gulp.watch('./*.html',['copyhtml'])
    gulp.watch('./src/styles/**/*',['scss'])
    gulp.watch('./src/scripts/**/*',['js'])
})
 
gulp.task('default',['js','scss','copyhtml','copylibs','copystatic','server','watch'],()=>{
    console.log('done.')
})
 
  