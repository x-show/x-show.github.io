// 自动播放
if (/i(Phone|P(o|a)d)/.test(navigator.userAgent)) {
    $(document).on('touchstart', function (e) {
        audio.touchstart = true;
        audio.play();
        return false;
    });
}