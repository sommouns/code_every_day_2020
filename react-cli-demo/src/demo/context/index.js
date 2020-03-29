import React, { Component } from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

export const ThemeContext = React.createContext(
    themes.dark // 默认值
);

export default class CTC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        };
    }

    render() {
        // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
        // 而外部的组件使用默认的 theme 值
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <section>
                    <ThemedButton />
                </section>
            </div>
        );
    }
}

function Toolbar(props) {
    // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
    // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
    // 因为必须将这个值层层传递所有组件。
    return (
        <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
    );
}

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button {...props} style={{ backgroundColor: theme.background }} />
        );
    }
}
ThemedButton.contextType = ThemeContext;
