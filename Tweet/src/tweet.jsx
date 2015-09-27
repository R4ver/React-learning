var r = React;

var NewTweet = r.createClass({
    handleChange(event) {
        var input_length = event.target.value.length;
        var max_length = this.props.maxVal;
        var tweet__submit = $(".tweet__submit");

        if ( input_length > max_length ) {
            tweet__submit.css("background-color", "#f44336");
            tweet__submit.prop("disabled", true);
        } else {
            tweet__submit.css("background-color", "#8bc34a");
            tweet__submit.prop("disabled", false);
        }

        $("#tweet__counter").html(max_length - input_length);
    },

    handleSubmit() {
        var input = $(".tweet__text"); 

        if ( input.val().length === 0 ) {
            alert("Please enter a tweet");
            return false;
        }

        alert( "Success!" );

        $("#tweets").prepend("<div class='single__tweet'><div class='profile__image'></div><p>" + $(".tweet__text").val() + "</p></div>");

        input.val("");
    },

    render() {
        return (
            <div className="tweet">
                <div className="profile__image"></div>
                <textarea type="text" onChange={ this.handleChange } placeholder="Tweet" className="tweet__text" />
                
                <div className="tweet__controls">
                    <label id="tweet__counter">{ this.props.maxVal }</label>
                    <input type="submit" value="Cancel" className="tweet__cancel" />                    
                    <input type="submit" onClick={ this.handleSubmit } value="Tweet" className="tweet__submit"/>
                </div>
            </div>
        )
    }
})

r.render(
    <NewTweet maxVal={140} />,
    document.getElementById("tweet-app")
);