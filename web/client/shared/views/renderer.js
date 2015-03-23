/**
 * Created by Tin Yin Lam on 3/22/15.
 */

// TODO: Add the dependency using requireJS later on.
CLAP.UITestRender = {
    render: function () {
        var content = $('.content');

        // Button view
        var buttonSection = $('<section></section>').attr({
            class: 'button'
        });

        // We need one container per view, since React.render will clear the whole content instead of append.
        var defaultButton = $('<div></div>');
        React.render(
            React.createElement(CLAP.SharedUI.Button, null),
            defaultButton[0]
        );
        var primaryButton = $('<div></div>');
        React.render(
            React.createElement(CLAP.SharedUI.Button, { className:'btn btn-primary btn-lg', text:'primary button' }),
            primaryButton[0]
        );
        var infoButton = $('<div></div>');
        React.render(
            React.createElement(CLAP.SharedUI.Button, { className:'btn btn-info btn-lg', text:'info button' }),
            infoButton[0]
        );
        buttonSection.append([ defaultButton, primaryButton, infoButton ]);
        content.append(buttonSection);

        // Input view
        var inputSection = $('<section></section>').attr({
            class: 'input'
        });

        // We need one container per view, since React.render will clear the whole content instead of append.
        var textInput = $('<div></div>');
        React.render(
            React.createElement(CLAP.SharedUI.Input, null),
            textInput[0]
        );
        var pwdInput= $('<div></div>');
        React.render(
            React.createElement(CLAP.SharedUI.Input, {
                type: 'password',
                placeholder:'Password'
            }),
            pwdInput[0]
        );
        inputSection.append([ textInput, pwdInput ]);
        content.append(inputSection);
    }
};

