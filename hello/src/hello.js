var r = React;


var HelloName = r.createClass({
    render: function() {
        return (
            <h1>Hello, { this.props.name }!</h1>
        )
    }
});

var RandomHello = r.createClass({
    render: function() {
        var hellos = [ "Hello", "Salut", "Hej" ];
        var rdm_min = 0;
        var rdm_max = hellos.length;
        var rdm = Math.floor( Math.random() * rdm_max ) + rdm_min;

        return(
            <h1>{ hellos[rdm] }, { this.props.name }!</h1>
        )
    }
});

//======================
// Choose a html page
// Remove the comments from the corresponding page
// Eg.
// hello-name.html
// Find hello-name.html in this file
// Remove comments from the render class
//======================

//Render header tag and append to hello element
//hello.html

// r.render(
//     <h1>Hello React</h1>,
//     document.getElementById("hello")
// );

//----------------------------------------

//Get the HelloName module, give it a name, render it
//hello-name.html

// r.render(
//     <HelloName name="Mark Z." />,
//     document.getElementById("hello-name")
// );

//----------------------------------------

//Render "Hello { name }" in different language
//hello-language.html

// r.render(
//     <RandomHello name="Mark Z." />,
//     document.getElementById("hello-language")
// );