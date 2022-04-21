<template>
  <div>
    woshidanqv
    <canvas id="canvas" style="display: none"></canvas>
    <div class="text" id="text"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    var img_url =
      'http://p1.music.126.net/ZRiucQeTs7xQrAktRAUXfQ==/109951167317709087.jpg'
    var img = new Image()
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    img.onload = function () {
      ctx.drawImage(img, 0, 0)
      img.style.display = 'none'
      var imgData = ctx.getImageData(0, 0, img.width, img.height).data
      var b =
        '(' +
        imgData[0] +
        ',' +
        imgData[1] +
        ',' +
        imgData[2] +
        ',' +
        imgData[3] +
        ')'
      //   $('#app').css({
      //     'background-color': 'rgb' + b
      //   })
      const text = document.getElementById('text')
      text.style.background = 'rgb' + b
    }
    img.src = img_url
    img.crossOrigin = 'anonymous'
  },
  methods: {
    xindiecon() {
      alert('123')
    }
  }
}
</script>
<style class="less" scope>
.text {
  height: 200px;
  width: 200px;
  border: 1px solid yellow;
}
</style>