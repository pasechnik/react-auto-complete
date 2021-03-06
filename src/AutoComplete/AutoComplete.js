import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import logo from '../logo.svg';

export class AutoComplete extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        fetchHints: PropTypes.func.isRequired,
    };

    // Set default props
    static defaultProps = {
        // fetchHints: async () => [],
    };

    constructor(props) {
        super(props);
        this.activeRef = React.createRef();
        this.fetchHintsDeb = debounce(this.fetchHints, 200);
    }

    state = {
        input: '',
        showHints: false,
        isLoading: false,
        hints: [],
        active: -1,
    };

    changeInputValue(input) {
        if (input.length === 0) {
            // there is no input - hide hints
            this.setState((state) => ({
                ...state,
                input,
                active: -1,
                showHints: false,
                isLoading: false,
                hints: [],
            }));
            return;
        }

        // show hint list, reset search attributes
        // start showing loading message
        this.setState((state) => ({
            ...state,
            input,
            active: -1,
            showHints: false,
            hints: [],
            isLoading: true,
        }));

        // fetch new hints
        this.fetchHintsDeb(input);
    }

    fetchHints(input) {
        // getCourses(input).then((hints) => {
        this.props.fetchHints(input).then((hints) => {
            this.setState((state) => ({
                ...state,
                hints,
                active: hints.length > 0 ? 0 : -1,
                showHints: true,
                isLoading: false,
            }));
        });
    }

    onChange = (e) => {
        const input = e.target.value;
        this.changeInputValue(input);
    };

    onHintClick = (e) => {
        this.setState({
            isLoading: false,
            showHints: false,
            input: e.target.innerText,
        });
    };

    scrollTo(ref) {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'auto', block: 'nearest' });
        }
    }

    onKeyDown = (e) => {
        const { active, hints, showHints, input } = this.state;

        // backspace
        if (e.keyCode === 8) {
            if (showHints === false) {
                this.setState((state) => ({
                    ...state,
                    input: '',
                    active: -1,
                    hints: [],
                }));
            }
            return;
        }

        // enter key
        if (e.keyCode === 13) {
            this.setState((state) => ({
                ...state,
                showHints: false,
                input: hints[active] !== undefined ? hints[active] : input,
            }));
            return;
        }

        // up
        if (e.keyCode === 38) {
            if (showHints === true) {
                if (active < 1) {
                    return;
                }

                this.setState(
                    (state) => ({
                        ...state,
                        active: active - 1,
                        input: hints[active - 1],
                    }),
                    () => {
                        this.scrollTo(this.activeRef);
                    },
                );

                return;
            }

            if (input.length) {
                this.setState(
                    (state) => ({
                        ...state,
                        showHints: true,
                    }),
                    () => {
                        this.scrollTo(this.activeRef);
                    },
                );
                return;
            }
        }

        // down
        if (e.keyCode === 40) {
            if (showHints === true) {
                if (active + 1 >= hints.length) {
                    return;
                }

                this.setState(
                    (state) => ({
                        ...state,
                        active: active + 1,
                        input: hints[active + 1],
                        showHints: true,
                    }),
                    () => {
                        this.scrollTo(this.activeRef);
                    },
                );

                return;
            }

            if (input.length) {
                this.setState(
                    (state) => ({
                        ...state,
                        showHints: true,
                    }),
                    () => {
                        this.scrollTo(this.activeRef);
                    },
                );
            }
        }
    };

    render() {
        const { active, hints, showHints, input, isLoading } = this.state;
        const { label, id } = this.props;

        return (
            <>
                <label htmlFor={`id${id}`}>
                    {`${label}: `}
                    <div className="autocomplete">
                        <input
                            type="text"
                            id={id}
                            name={`id${id}`}
                            onChange={this.onChange}
                            onKeyDown={this.onKeyDown}
                            value={input}
                            placeholder={label}
                            autoComplete="off"
                        />

                        {showHints && (
                            <ul className="hints">
                                {hints.map((hint, index) => {
                                    let className;

                                    // Flag the active hint with a class
                                    if (index === active) {
                                        className = 'hint-active';

                                        return (
                                            <li
                                                ref={this.activeRef}
                                                className={className}
                                                key={hint}
                                                onClick={this.onHintClick}
                                            >
                                                {hint}
                                            </li>
                                        );
                                    }

                                    return (
                                        <li
                                            className={className}
                                            key={hint}
                                            onClick={this.onHintClick}
                                        >
                                            {hint}
                                        </li>
                                    );
                                })}

                                {hints.length === 0 && (
                                    <div className="no-hints">
                                        <em>Sorry, there is no overlap</em>
                                    </div>
                                )}
                            </ul>
                        )}

                        {isLoading && (
                            <ul className="hints">
                                <li>
                                    <div className="no-hints">
                                        <img src={logo} className="loading-logo" alt="loading" />
                                        <em> Loading ... </em>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </div>
                </label>
            </>
        );
    }
}

export default AutoComplete;
