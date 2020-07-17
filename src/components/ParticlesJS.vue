<template>
    <div id="particles-js"></div>
</template>

<script>
    export default {
      name: "ParticlesJS",
      mounted() {
        require('particles.js')
        this.$nextTick(() => {
          this.initParticlesJS()
        })
      },
      methods: {
        initParticlesJS () {
          /* eslint-disable */
          particlesJS('particles-js', {
            'particles': {
              'number': {
                'value': 70,
                'density': {
                  'enable': true,
                  'value_area': 1300
                }
              },
              'color': {
                'value': '#ffffff'
              },
              'shape': {
                'type': 'circle',
                'stroke': {
                  'width': 0,
                  'color': '#000000'
                },
                'polygon': {
                  'nb_sides': 5
                },
                'image': {
                  'src': 'img/github.svg',
                  'width': 100,
                  'height': 100
                }
              },
              'opacity': {
                'value': 0.5,
                'random': false,
                'anim': {
                  'enable': false,
                  'speed': 1,
                  'opacity_min': 0.1,
                  'sync': false
                }
              },
              'size': {
                'value': 3,
                'random': true,
                'anim': {
                  'enable': false,
                  'speed': 77,
                  'size_min': 0.1,
                  'sync': false
                }
              },
              'line_linked': {
                'enable': true,
                'distance': 70,
                'color': '#ffffff',
                'opacity': 0.5,
                'width': 1.5
              },
              'move': {
                'enable': true,
                'speed': 3.3,
                'direction': 'none',
                'random': false,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                  'enable': false,
                  'rotateX': 600,
                  'rotateY': 1200
                }
              }
            },
            'interactivity': {
              'detect_on': 'canvas',
              'events': {
                'onhover': {
                  'enable': true,
                  'mode': 'grab'
                },
                'onclick': {
                  'enable': true,
                  'mode': 'repulse'
                },
                'resize': true
              },
              'modes': {
                'grab': {
                  'distance': 200,
                  'line_linked': {
                    'opacity': 0.7
                  }
                },
                'bubble': {
                  'distance': 800,
                  'size': 80,
                  'duration': 2,
                  'opacity': 0.8,
                  'speed': 3
                },
                'repulse': {
                  'distance': 350,
                  'duration': 0.2
                },
                'push': {
                  'particles_nb': 4
                },
                'remove': {
                  'particles_nb': 2
                }
              }
            },
            'retina_detect': true
          })
        }
      }

    }
</script>

<style>
  #particles-js{
    background: black;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
</style>
