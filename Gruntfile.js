module.exports = function(grunt){
  grunt.initConfig({
    sass:{
      options:{
        style:"compressed"
      },
      dist:{
        files:{
          "assets/css/theme.css":"assets/sass/theme.scss"
        }
      }
    },
    uglify:{
      my_target:{
        files:{
          "assets/js/dom-effects.min.js":"assets/js/dom-effects.js"
        }
      }
    },
    watch:{
      options:{
        livereload:460
      },
      sass:{
        files:"assets/sass/*.scss",
        tasks:"sass",
        reload:false
      },
      css:{
        files:"assets/css/*.css",
        reload:false
      },
      js_min:{
        files:"assets/js/dom-effects.js", // Apenas este arquivo!
        tasks:"uglify",
        reload:false
      },
      js:{
        files:"assets/js/*.js", // Apenas este arquivo!
        reload:true
      },
      html_php:{
        files:["**/*.html","**/*.php"], // Apenas este arquivo!
        reload:true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default","watch");
}
