    import React, { Component } from 'react';
    import classNames from 'classnames';
    import validator from 'validator';
    import './Register.css';
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";

    class Register extends Component {
      formDefaults = {
        name: { value: '', isValid: true, message: '' },
        email: { value: '', isValid: true, message: '' },
        password: { value: '', isValid: true, message: '' },
        confirmPassword: { value: '', isValid: true, message: '' }
      }

      state = {
        ...this.formDefaults
      };

      onChange = (e) => {
        const state = {
          ...this.state,
          [e.target.name]: {
            ...this.state[e.target.name],
            value: e.target.value,
          }
        };

        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();
        // reset states before the validation procedure is run.
        this.resetValidationStates();
        // run the validation, and if it's good move on.
        if (this.formIsValid()) {
          // form processing here....
        }
      }

      formIsValid = () => {
        const name = { ...this.state.name };
        const email = { ...this.state.email };
        const password = { ...this.state.password };
        const confirmPassword = { ...this.state.confirmPassword };
        let isGood = true;

        if (!validator.isEmail(email.value)) {
          email.isValid = false;
          email.message = 'Not a valid email address';
          isGood = false;
        }

        // perform addtion validation on password and confirmPassword here...

        if (!isGood) {
          this.setState({
            name,
            email,
            password,
            confirmPassword,
          });
        }

        return isGood;
      }

      resetValidationStates = () => {
        // make a copy of everything in state
        const state = JSON.parse(JSON.stringify(this.state));

        /*
        loop through each item in state and if it's safe to assume that only
        form values have an 'isValid' property, we can use that to reset their
        validation states and keep their existing value property. This process
        makes it easy to set all validation states on form inputs in case the number
        of fields on our form grows in the future.
        */
        Object.keys(state).map(key => {
          if (state[key].hasOwnProperty('isValid')) {
            state[key].isValid = true;
            state[key].message = '';
          }
        });

        this.setState(state);
      }

      resetForm = () => {
        this.setState(...this.formDefaults);
      }

      render() {
        const {name, email, password, confirmPassword } = this.state;
        /*
        Each of the group classes below will include the 'form-group' class,
        and will only include the 'has-error' class if the isValid value is false.
        */
       const nameGroupClass = classNames('form-group',
          { 'has-error': !name.isValid }
        );
        const emailGroupClass = classNames('form-group',
          { 'has-error': !email.isValid }
        );
        const passwordGroupClass = classNames('form-group',
          { 'has-error': !password.isValid }
        );
        const confirmGroupClass = classNames('form-group',
          { 'has-error': !confirmPassword.isValid }
        );

        return (
          <div className="container" >
              <div class="wrapper animated bounceInLeft">
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
              <div className="card">
              <form className="form-signin" onSubmit={this.onSubmit}>
              <h2 className="form-signin-heading">Create Account</h2>
              <hr/>
              <div className={nameGroupClass}>
                  <label>Name</label>
                <input type="text" name="name" className="form-control" placeholder=" Enter your Name " value={name.value} onChange={this.onChange} autoFocus/>
                <br/>
                <span className="help-block" style={{color:'red'}}>{name.message}</span>
              </div>

              <div className={emailGroupClass}>
              <label>Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter your Email address"
                  value={email.value}
                  onChange={this.onChange}
                  autoFocus
                />
                <br/>
                <span className="help-block" style={{color:'red'}}>{email.message}</span>
              </div>

              <div className={passwordGroupClass}>
              <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={password.value}
                  onChange={this.onChange}
                />
                <br/>
                <span className="help-block" style={{color:'red'}}>{password.message}</span>
              </div>

              <div className={confirmGroupClass}>
              <label>Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your Password"
                  value={confirmPassword.value}
                  onChange={this.onChange}
                />
                <span className="help-block" style={{color:'red'}}>{confirmPassword.message}</span>
              </div>

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Create Account
              </button>
            </form>
            </div>
            </div>
          </div>
        );
      }
    };
  export default Register;