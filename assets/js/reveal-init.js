Reveal.initialize({
    hash: true,
    touch: true,
    mouseWheel: true,

    plugins: [RevealMarkdown, RevealHighlight, RevealChart],
    dependencies: [{
        src: 'plugins/external/external/external.js',
        condition: function () {
            return !!document.querySelector('[data-external],[data-external-replace]');
        }
    },],

});
