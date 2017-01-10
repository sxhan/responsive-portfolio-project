module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
              width: 2600,
              suffix: '_large_2x',
              quality: 60
          },{
              width: 1300,
              suffix: '_large_1x',
              quality: 30
          },{
              width: 540,
              suffix: '_med_2x',
              quality: 60
          },{
              width: 270,
              suffix: '_med_1x',
              quality: 30
          }]
      },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
