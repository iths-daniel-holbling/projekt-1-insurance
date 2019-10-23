let navLinks = document.querySelectorAll("nav a");

for(element of navLinks){
    element.addEventListener("click", event => {
        let target = event.currentTarget;
        let animation = anime({
            targets: target,
            rotate: '1turn',
            duration: 500
        });
        let logFinished = function(){
            window.location = target.getAttribute('banana');
        }
        animation.finished.then(logFinished);
    })
}


let granimInstance = new Granim({
    element: '#gradient',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    image : {
        source: './images/scream.png',
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});

