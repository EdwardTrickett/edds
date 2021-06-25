const boom = document.getElementById("aKey");

aKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
})
const clap = document.getElementById("sKey");

sKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
})
const hihat = document.getElementById("dKey");
dKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
})
const kick = document.getElementById("fKey");
fKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
})
const openhat = document.getElementById("gKey");
gKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
})
const ride = document.getElementById("hKey");
hKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
})
const snare = document.getElementById("jKey");
jKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
})
const tink = document.getElementById("kKey");
kKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
})
const tom = document.getElementById("lKey");
lKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
      document.getElementById("boom").pause();
      document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 83) {
      document.getElementById("clap").pause();
      document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 68) {
      document.getElementById("hihat").pause();
      document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 70) {
      document.getElementById("kick").pause();
      document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 71) {
      document.getElementById("openhat").pause();
      document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 72) {
      document.getElementById("ride").pause();
      document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 74) {
      document.getElementById("snare").pause();
      document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 75) {
      document.getElementById("tink").pause();
      document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
    }
  })
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 76) {
      document.getElementById("tom").pause();
      document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
    }
  });