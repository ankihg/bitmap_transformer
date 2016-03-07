welcome to my bitmap transformer

to run call node lib/app.js from root directories

with no arguments passed will default to
  transform: invert
  img: palette-bitmap.bmp

result is found in media/plz.bmp

argument order is transform then img path (relative to root dir)

ex
 node lib/app.js grn
  will greenscale palette-bitmap.bmp

  node lib/app.js grn media/non-palette-bitmap.bmp
   will greenscale non-palette-bitmap.bmp

transformation tags for command line
  inv - invert
  gra - grayscale
  red - redscale
  grn - greenscale
  blu - bluescale
