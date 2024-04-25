/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './Form.module.css';

function FormComponent() {
  return (
    <form className={styles['ContactUs-form']}>
      <div className={styles.Content}>
        <h3>Contact us</h3>
        <div className={styles.input__name}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="Input your first Name Here"
              id="firstname"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="Input your last Name Here"
              id="lastname"
            />
          </div>
        </div>
        <div className={styles.input__email}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Input your Email Address Here"
            style={{ padding: '0 15px' }}
            id="email"
          />
        </div>
        <div className={styles.input__phone}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            placeholder="Input your Phone Number Here"
            style={{ padding: '0 80px' }}
            id="number"
          />
          <div className={styles.select_field}>
            <select
              style={{
                backgroundColor: '#e1e1e1',
                border: '1px solid #e1e1e1',
                borderRadius: '8px 0 0 8px',
                color: '#11142D',
                fontFamily: 'Mulish, sans-serif',
                fontSize: 16,
                fontWeight: 500,
                height: 48,
                letterSpacing: '0.005em',
                outline: 'none',
                width: 69,
              }}
            >
              <option>+250</option>
              <option>+237</option>
              <option>+215</option>
            </select>
          </div>
        </div>
        <div className={styles.input__message}>
          <label htmlFor="message">Message</label>
          <textarea
            cols="5"
            rows="5"
            placeholder="Write a message"
            id="message"
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormComponent;
