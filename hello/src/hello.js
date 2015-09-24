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

        return (
            <h1>{ hellos[rdm] }, { this.props.name }!</h1>
        )
    }
});

var Hello = r.createClass({
    render: function() {
        if ( this.props.random === "true" ) {
            return( <RandomHello name={ this.props.name } /> )
        } else {
            return( <HelloName name={ this.props.name } /> )
        }
    }
});