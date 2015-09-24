var r = React;


var HelloName = r.createClass({
    render: function() {
        return (
            <h1>Hello, { this.props.name }!</h1>
        )
    }
})

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