
(function () {
    'use strict';


    function caesarCipher(text, shift, decode) {
        if (decode) shift = 26 - (shift % 26);
        return text.replace(/[a-zA-Z]/g, function (ch) {
            var base = ch >= 'a' ? 97 : 65;
            return String.fromCharCode(((ch.charCodeAt(0) - base + shift) % 26) + base);
        });
    }


    var shiftSlider   = document.getElementById('shiftSlider');
    var shiftVal      = document.getElementById('shiftVal');
    var cipherInput   = document.getElementById('cipherInput');
    var cipherOutput  = document.getElementById('cipherOutput');
    var runBtn        = document.getElementById('runCipher');
    var runLabel      = document.getElementById('runLabel');
    var clearBtn      = document.getElementById('clearCipher');
    var swapBtn       = document.getElementById('swapCipher');
    var copyBtn       = document.getElementById('copyBtn');
    var copyConfirm   = document.getElementById('copyConfirm');

    if (!shiftSlider) return;


    function getMode() {
        var checked = document.querySelector('input[name="cipherMode"]:checked');
        return checked ? checked.value : 'encode';
    }

    function updateRunLabel() {
        var mode = getMode();
        runLabel.textContent = mode === 'encode' ? 'Encode' : 'Decode';
    }

    function runCipher() {
        var text  = cipherInput.value;
        var shift = parseInt(shiftSlider.value, 10);
        var mode  = getMode();
        cipherOutput.value = caesarCipher(text, shift, mode === 'decode');
    }

    function legacyCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
            document.execCommand('copy');
        } finally {
            document.body.removeChild(ta);
        }
    }


    shiftSlider.addEventListener('input', function () {
        shiftVal.textContent = shiftSlider.value;
        if (cipherInput.value.trim()) runCipher();
    });

    document.querySelectorAll('input[name="cipherMode"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            updateRunLabel();
            if (cipherInput.value.trim()) runCipher();
        });
    });

    cipherInput.addEventListener('input', function () {
        if (cipherInput.value.trim()) {
            runCipher();
        } else {
            cipherOutput.value = '';
        }
    });

    runBtn.addEventListener('click', runCipher);

    clearBtn.addEventListener('click', function () {
        cipherInput.value  = '';
        cipherOutput.value = '';
        copyConfirm.textContent = '';
        cipherInput.focus();
    });

    swapBtn.addEventListener('click', function () {
        var tmp = cipherInput.value;
        cipherInput.value  = cipherOutput.value;
        cipherOutput.value = tmp;
        if (cipherInput.value.trim()) runCipher();
    });

    copyBtn.addEventListener('click', function () {
        if (!cipherOutput.value) return;
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(cipherOutput.value).then(function () {
                copyConfirm.textContent = 'Copied to clipboard!';
                setTimeout(function () { copyConfirm.textContent = ''; }, 2500);
            }).catch(function () {
                legacyCopy(cipherOutput.value);
                copyConfirm.textContent = 'Copied!';
                setTimeout(function () { copyConfirm.textContent = ''; }, 2500);
            });
        } else {
            legacyCopy(cipherOutput.value);
            copyConfirm.textContent = 'Copied!';
            setTimeout(function () { copyConfirm.textContent = ''; }, 2500);
        }
    });

    updateRunLabel();

}());
