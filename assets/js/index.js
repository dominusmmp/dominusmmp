import Alpine from "alpinejs";
// import mediumZoom from "medium-zoom";
// import Plyr from "plyr";
// import "plyr/dist/plyr.css";
// import "./components/skip-link-focus-fix";

(function () {
    'use strict';

    window.Alpine = Alpine
    // const data = fetch('./assets/data/data.json').then(response => response.json())
    // Alpine.data('data', data)
    Alpine.start();

    /* BEGIN: Image Zoom */
    // mediumZoom('.entry-content img', {
    //     margin: 24,
    //     background: '#000',
    // });

    // mediumZoom('.zoom', {
    //     margin: 24,
    //     background: '#000',
    // });
    /* END: Image Zoom */


    /* BEGIN: Video And Audio Player Initialize */
    // (function () {
    //     let audno = 0
    //     let audplayer = {};
    //     document.querySelectorAll('audio').forEach(el => {
    //         audplayer[audno] = new Plyr(el);
    //         audno++;
    //     })

    //     let vidno = 0
    //     let vidplayer = {};
    //     document.querySelectorAll('video').forEach(el => {
    //         vidplayer[vidno] = new Plyr(el);
    //         vidno++;
    //     });
    // })();
    /* END: Video And Audio Player Initialize */

    /* BEGIN: Disable Links With # in href */
    (function () {
        document.querySelectorAll('a[href="#"]').forEach((el) => {
            el.addEventListener('click', function (e) { e.preventDefault() });
        });
    })();
    /* END: Disable Links With # in href */

})();