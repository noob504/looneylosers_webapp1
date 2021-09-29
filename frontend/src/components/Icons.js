
import React from "react";
import './icons.css'


export const NoteIt = (props) => {
  return (
    <div>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 223 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M206.532 28.777L205.082 27.8182L204.302 27.3024L202.74 26.2699L198.28 23.3202C194.798 31.2501 186 32.6788 186 32.6788C190.465 45.0727 186.369 54.4156 186.369 54.4156L196.735 38.7428C196.269 38.1906 196.193 37.3801 196.612 36.7476C197.121 35.9778 198.158 35.7653 198.928 36.2754C199.697 36.784 199.91 37.8213 199.4 38.5916C198.981 39.225 198.206 39.4719 197.515 39.2595L187.15 54.9318C187.15 54.9318 194.145 47.5062 207.298 46.7646C207.298 46.7646 205.169 38.1088 211.103 31.8008L206.532 28.777Z"
          fill="black"
        />
        <path
          d="M201.552 9L197.626 21.0375L213.46 31.5099L223 23.1853L201.552 9Z"
          fill="black"
        />
        <path
          d="M0 85L5.376 60.712C5.12 59.816 4.416 58.088 3.264 55.528C3.264 55.08 3.808 54.664 4.896 54.28C8.096 53.064 10.144 52.456 11.04 52.456C12 52.456 12.48 52.744 12.48 53.32C10.112 59.208 8.48 63.304 7.584 65.608C7.584 65.8 7.584 65.992 7.584 66.184C7.584 68.168 7.296 69.16 6.72 69.16C6.592 69.16 6.496 69.064 6.432 68.872C5.088 72.904 4.16 75.848 3.648 77.704C6.592 72.904 9.6 68.712 12.672 65.128C17.472 59.56 21.44 56.776 24.576 56.776C26.048 56.776 26.784 57.352 26.784 58.504C26.784 58.952 24.928 65.992 21.216 79.624C24.928 76.872 27.808 73.928 29.856 70.792C30.176 70.408 30.4 70.216 30.528 70.216C30.72 70.216 30.816 70.312 30.816 70.504C30.816 70.696 30.72 70.952 30.528 71.272C27.712 76.264 24.288 80.232 20.256 83.176C19.936 83.56 19.52 83.752 19.008 83.752C18.56 83.752 18.336 83.464 18.336 82.888C18.336 82.312 18.72 80.136 19.488 76.36C20.256 72.584 20.8 69.704 21.12 67.72C21.504 65.736 21.76 63.24 21.888 60.232C19.264 61.512 16.032 64.264 12.192 68.488C8.352 72.712 5.792 76.008 4.512 78.376C3.296 80.744 2.496 82.696 2.112 84.232C1.792 85.704 1.344 86.44 0.768 86.44C0.256 86.44 0 86.024 0 85.192V85ZM6.816 54.952C6.496 55.208 5.888 55.528 4.992 55.912L5.952 58.12L6.816 54.952ZM52.9043 65.608L53.1923 63.784C53.1923 62.76 52.8403 61.928 52.1363 61.288C51.4963 60.584 50.7283 60.232 49.8323 60.232C49.0643 68.04 47.1763 74.024 44.1683 78.184H47.1443C46.3123 78.696 45.6723 78.952 45.2243 78.952C44.8403 78.952 44.5523 78.92 44.3603 78.856C44.2323 78.792 44.0723 78.76 43.8803 78.76C43.9443 78.824 43.7523 79.048 43.3043 79.432C42.9203 79.752 41.7363 80.776 39.7523 82.504C37.7683 84.232 35.9123 85.096 34.1843 85.096C31.6883 85.096 30.4403 83.496 30.4403 80.296C30.4403 76.392 31.9123 72.392 34.8563 68.296C33.8323 65.8 33.3203 63.176 33.3203 60.424C33.3203 57.608 33.8643 55.176 34.9523 53.128C37.0643 49.096 39.6883 47.08 42.8243 47.08C46.7923 47.08 49.0963 50.472 49.7363 57.256C52.9363 57.384 54.5363 59.048 54.5363 62.248C54.5363 64.872 54.1203 66.184 53.2883 66.184C53.0323 66.184 52.9043 65.992 52.9043 65.608ZM42.9203 49.192C40.8723 49.192 38.9843 51.208 37.2563 55.24C36.1683 57.672 35.6243 60.008 35.6243 62.248C35.6243 64.488 35.7203 66.152 35.9123 67.24C39.8163 61.992 43.9123 58.728 48.2003 57.448C46.9203 51.944 45.1603 49.192 42.9203 49.192ZM48.2963 60.136C46.8883 60.328 44.6803 61.64 41.6723 64.072C38.7283 66.44 36.9043 68.328 36.2003 69.736C37.5443 74.6 39.1763 77.256 41.0962 77.704C42.6323 76.296 44.2003 73.512 45.8003 69.352C47.4643 65.192 48.2963 62.12 48.2963 60.136ZM35.5283 70.6C33.4163 74.184 32.3603 77.032 32.3603 79.144C32.3603 81.192 33.0643 82.216 34.4723 82.216C36.2003 82.216 38.2803 80.872 40.7123 78.184C38.6003 77.928 36.8723 75.4 35.5283 70.6ZM89.703 53.512C89.703 54.6 84.295 56.68 73.479 59.752C70.599 65.32 68.839 68.872 68.199 70.408C66.535 74.376 65.703 78.184 65.703 81.832C65.703 83.944 66.407 85 67.815 85C69.543 85 71.815 83.784 74.631 81.352L78.951 77.608C79.143 77.608 79.239 77.704 79.239 77.896C79.239 78.088 79.143 78.376 78.951 78.76C77.927 80.296 76.199 82.024 73.767 83.944C71.335 85.8 69.415 86.728 68.007 86.728C64.807 86.728 63.207 84.776 63.207 80.872C63.207 78.056 63.911 74.568 65.319 70.408C64.679 68.616 63.399 67.304 61.479 66.472C60.903 66.216 60.039 65.864 58.887 65.416C57.735 64.968 56.807 64.584 56.103 64.264C55.399 63.944 55.047 63.304 55.047 62.344C55.047 61.32 55.495 60.712 56.391 60.52H58.983C62.311 60.52 65.863 60.136 69.639 59.368L78.855 38.728C79.303 37.576 80.359 37 82.023 37C83.751 37 84.615 37.32 84.615 37.96C84.615 38.152 83.399 40.904 80.967 46.216C78.599 51.464 77.287 54.216 77.031 54.472L75.399 56.008L74.247 58.312C75.783 57.864 80.455 56.264 88.263 53.512C88.903 53.384 89.287 53.32 89.415 53.32C89.607 53.32 89.703 53.384 89.703 53.512ZM68.967 61C65.383 61.832 62.151 62.472 59.271 62.92C62.599 64.648 64.743 66.696 65.703 69.064C66.343 67.272 67.431 64.584 68.967 61ZM109.841 71.368C109.905 71.368 109.937 71.464 109.937 71.656C109.937 71.848 109.681 72.392 109.169 73.288C107.185 76.488 104.305 79.464 100.529 82.216C96.7525 84.904 93.2005 86.248 89.8725 86.248C85.3285 86.248 83.0565 83.304 83.0565 77.416C83.0565 75.432 83.2805 73.32 83.7285 71.08C83.1525 70.568 82.6405 69.864 82.1925 68.968C82.2565 69.032 82.4165 69.128 82.6725 69.256C82.9285 69.32 83.1525 69.416 83.3445 69.544C83.6005 69.608 83.8565 69.672 84.1125 69.736C84.7525 66.6 86.7045 63.368 89.9685 60.04C93.2325 56.712 96.4005 55.048 99.4725 55.048C100.177 55.048 100.529 55.144 100.529 55.336C100.529 55.464 100.081 55.784 99.1845 56.296C96.8165 57.576 94.6085 59.56 92.5605 62.248C90.3845 64.936 88.8165 67.624 87.8565 70.312L88.0485 70.504C91.1205 70.504 94.3205 69.032 97.6485 66.088C100.977 63.144 102.641 60.136 102.641 57.064C102.641 56.168 102.385 55.336 101.873 54.568C101.425 53.736 100.657 53.32 99.5685 53.32C98.4805 53.32 97.1045 53.832 95.4405 54.856C93.8405 55.816 92.9445 56.296 92.7525 56.296C92.6245 56.296 92.5605 56.264 92.5605 56.2C92.5605 55.432 93.5845 54.632 95.6325 53.8C97.7445 52.968 99.4405 52.552 100.721 52.552C102.065 52.552 103.217 52.968 104.177 53.8C105.137 54.632 105.617 55.784 105.617 57.256C105.617 60.648 103.505 63.848 99.2805 66.856C95.1205 69.864 91.1845 71.528 87.4725 71.848C86.9605 73.384 86.7045 74.856 86.7045 76.264C86.7045 81.576 88.6245 84.232 92.4645 84.232C95.4085 84.232 98.3525 83.08 101.297 80.776C104.241 78.408 106.609 75.72 108.401 72.712C108.977 71.816 109.457 71.368 109.841 71.368ZM114.441 85.864C113.929 85.864 113.449 85.512 113.001 84.808C112.617 84.104 112.425 83.336 112.425 82.504C112.425 81.608 113.001 80.936 114.153 80.488C114.537 80.04 115.433 79.432 116.841 78.664C118.249 77.896 119.113 77.512 119.433 77.512C119.753 77.512 119.977 77.576 120.105 77.704L118.665 79.432C118.089 80.328 117.641 81.416 117.321 82.696C116.745 84.808 115.785 85.864 114.441 85.864ZM141.354 71.272C141.482 71.272 141.546 71.336 141.546 71.464C141.546 72.552 139.786 74.952 136.266 78.664C133.45 81.48 131.306 82.888 129.834 82.888C126.57 82.888 124.938 81.256 124.938 77.992C124.938 75.56 125.578 72.488 126.858 68.776L125.13 71.464C124.298 72.872 123.722 73.576 123.402 73.576C123.274 73.576 123.21 73.416 123.21 73.096C123.21 72.712 123.69 71.88 124.65 70.6C125.61 69.32 127.018 66.696 128.874 62.728C129.386 61.384 130.09 59.88 130.986 58.216C131.306 57.64 132.042 57.352 133.194 57.352C134.41 57.352 135.018 57.672 135.018 58.312C135.018 58.952 134.698 59.912 134.058 61.192C133.418 62.472 132.874 63.208 132.426 63.4C129.098 70.056 127.434 74.952 127.434 78.088C127.434 80.2 128.138 81.256 129.546 81.256C131.85 81.256 134.378 79.592 137.13 76.264C138.282 74.92 138.986 74.12 139.242 73.864C139.498 73.544 139.754 73.224 140.01 72.904C140.266 72.584 140.49 72.328 140.682 72.136C141.002 71.816 141.226 71.528 141.354 71.272ZM138.378 45.16C139.786 44.52 140.65 44.2 140.97 44.2C141.29 44.2 141.45 44.296 141.45 44.488C141.45 44.616 140.714 45.512 139.242 47.176L137.802 50.152C137.226 51.432 136.49 52.072 135.594 52.072C134.314 52.072 133.674 51.4 133.674 50.056C133.674 49.416 134.09 48.616 134.922 47.656C135.818 46.632 136.97 45.8 138.378 45.16ZM174.266 53.512C174.266 54.6 168.858 56.68 158.042 59.752C155.162 65.32 153.402 68.872 152.762 70.408C151.098 74.376 150.266 78.184 150.266 81.832C150.266 83.944 150.97 85 152.377 85C154.106 85 156.378 83.784 159.194 81.352L186.938 53.992C187.13 53.992 187.226 54.088 187.226 54.28C187.226 54.472 187.13 54.76 186.938 55.144C185.914 56.68 160.762 82.024 158.33 83.944C155.898 85.8 153.978 86.728 152.57 86.728C149.37 86.728 147.77 84.776 147.77 80.872C147.77 78.056 148.474 74.568 149.882 70.408C149.242 68.616 147.962 67.304 146.041 66.472C145.466 66.216 144.602 65.864 143.45 65.416C142.298 64.968 141.37 64.584 140.666 64.264C139.962 63.944 139.609 63.304 139.609 62.344C139.609 61.32 140.058 60.712 140.954 60.52H143.546C146.874 60.52 150.426 60.136 154.202 59.368L163.418 38.728C163.866 37.576 164.922 37 166.586 37C168.314 37 169.178 37.32 169.178 37.96C169.178 38.152 167.962 40.904 165.53 46.216C163.162 51.464 161.85 54.216 161.594 54.472L159.962 56.008L158.81 58.312C160.346 57.864 165.018 56.264 172.826 53.512C173.466 53.384 173.85 53.32 173.978 53.32C174.17 53.32 174.266 53.384 174.266 53.512ZM153.53 61C149.946 61.832 146.714 62.472 143.834 62.92C147.162 64.648 149.306 66.696 150.266 69.064C150.906 67.272 151.994 64.584 153.53 61Z"
          fill="black"
        />
      </svg>
    </div>
  );
};


export const UserInput = () => {
  return (
    <div>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
    </div>
  );
};

export const Google = () => {
  return (
    <div className="authentication">
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.6278 17.2156C41.8776 18.625 42.0021 20.0531 42 21.4837C42 27.8727 39.6702 33.2748 35.6159 36.9313H35.6213C32.0757 40.1416 27.202 42 21.4231 42C15.7413 42 10.2923 39.7876 6.27468 35.8494C2.25707 31.9113 0 26.5701 0 21.0007C0 15.4313 2.25707 10.0901 6.27468 6.15194C10.2923 2.21381 15.7413 0.00138566 21.4231 0.00138566C26.7412 -0.0596655 31.8771 1.89876 35.7551 5.46645L29.6388 11.4618C27.4279 9.39588 24.4772 8.26459 21.4231 8.31186C15.8343 8.31186 11.0865 12.0077 9.39403 16.9846C8.49668 19.5924 8.49668 22.4168 9.39403 25.0247H9.40206C11.1025 29.9936 15.8424 33.6895 21.4311 33.6895C24.3179 33.6895 26.7976 32.965 28.7203 31.6841H28.7123C29.8287 30.9591 30.7837 30.0199 31.5197 28.9232C32.2556 27.8264 32.7572 26.5949 32.9942 25.3029H21.4231V17.2182H41.6278V17.2156Z"
          fill="black"
          fill-opacity="0.7"
        />
      </svg>
    </div>
  );
};

export const Github = () => {
  return (
    <div className='authentication'>
      <svg
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
          fill="black"
          fill-opacity="0.7"
        />
      </svg>
    </div>
  );
};

export const CloseButton = () => {
  return (
    <div>
      <svg
        width="41"
        height="12"
        viewBox="0 0 41 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.63478 11.2696C8.74678 11.2696 11.2696 8.74678 11.2696 5.63478C11.2696 2.52278 8.74678 0 5.63478 0C2.52278 0 0 2.52278 0 5.63478C0 8.74678 2.52278 11.2696 5.63478 11.2696Z"
          fill="black"
        />
        <path
          d="M20.5 11.2696C23.612 11.2696 26.1348 8.74678 26.1348 5.63478C26.1348 2.52278 23.612 0 20.5 0C17.388 0 14.8652 2.52278 14.8652 5.63478C14.8652 8.74678 17.388 11.2696 20.5 11.2696Z"
          fill="black"
        />
        <path
          d="M35.3652 11.2696C38.4773 11.2696 41 8.74678 41 5.63478C41 2.52278 38.4773 0 35.3652 0C32.2532 0 29.7305 2.52278 29.7305 5.63478C29.7305 8.74678 32.2532 11.2696 35.3652 11.2696Z"
          fill="black"
        />
      </svg>
    </div>
  );
};




export const Pencil = () => {
  return (
    <div style={{ margin: 'auto' }}>
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.51167 28.8449L25 13.3565L17.6433 5.99988L2.155 21.4882C1.94177 21.7017 1.79031 21.9689 1.71667 22.2616L0 30.9999L8.73667 29.2832C9.03 29.2099 9.29833 29.0582 9.51167 28.8449ZM30 8.35655C30.6249 7.73146 30.976 6.88376 30.976 5.99988C30.976 5.116 30.6249 4.26831 30 3.64321L27.3567 0.999881C26.7316 0.374977 25.8839 0.0239258 25 0.0239258C24.1161 0.0239258 23.2684 0.374977 22.6433 0.999881L20 3.64321L27.3567 10.9999L30 8.35655Z" fill="black" />
      </svg>
    </div>
  )
}



export const MyNotes = () => {
  return (
    <div>
      <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.276646 0.000360216C0.142773 0.000360216 0 0.134449 0 0.369221V24.6311C0 24.8659 0.14277 25 0.276646 25H20.3979C20.5318 25 20.6745 24.8659 20.6745 24.6311V18.0654L20.5454 18.2222L19.9184 18.9876C19.9077 19.0071 19.8954 19.0256 19.8815 19.0429L19.8723 19.052C19.8612 19.0684 19.8489 19.0838 19.8354 19.0981C19.8237 19.1082 19.8114 19.1174 19.7985 19.1259C19.7896 19.1324 19.7803 19.1385 19.7708 19.1442C19.7589 19.151 19.7466 19.1571 19.734 19.1625C19.7249 19.1659 19.7156 19.1689 19.7063 19.1716C19.6824 19.1803 19.6577 19.1864 19.6325 19.1899L15.2522 20.693C15.1932 20.7121 15.1303 20.716 15.0694 20.7043C15.0085 20.6927 14.9515 20.6658 14.9037 20.6263C14.8559 20.5868 14.8189 20.5359 14.796 20.4782C14.7731 20.4206 14.7651 20.3581 14.7727 20.2965L15.3444 15.6858C15.3438 15.6735 15.3438 15.6612 15.3444 15.6489C15.3443 15.6428 15.3443 15.6367 15.3444 15.6306C15.3503 15.6019 15.3596 15.5741 15.3721 15.5476C15.372 15.5445 15.372 15.5415 15.3721 15.5384C15.3859 15.5052 15.4046 15.4741 15.4274 15.4462V15.4371C15.4414 15.4204 15.4568 15.405 15.4735 15.391C15.4822 15.3812 15.4915 15.372 15.5012 15.3632L20.6744 8.99106V8.98193V0.368861C20.6744 0.134085 20.5316 0 20.3977 0H0.276484L0.276646 0.000360216ZM3.21833 3.4768C3.23062 3.47619 3.24293 3.47619 3.25521 3.4768H17.4195C17.4683 3.47619 17.5168 3.48527 17.5621 3.50353C17.6074 3.52179 17.6486 3.54886 17.6833 3.58318C17.7181 3.61749 17.7457 3.65836 17.7645 3.70342C17.7833 3.74848 17.793 3.79683 17.793 3.84567C17.793 3.8945 17.7833 3.94286 17.7645 3.98792C17.7457 4.03297 17.7181 4.07384 17.6833 4.10816C17.6486 4.14247 17.6074 4.16954 17.5621 4.1878C17.5168 4.20606 17.4683 4.21515 17.4195 4.21453H3.25521C3.15785 4.21863 3.06281 4.18409 2.9908 4.11842C2.91879 4.05276 2.87566 3.9613 2.87079 3.86397C2.86593 3.76663 2.89972 3.67133 2.96482 3.59881C3.02992 3.52629 3.12104 3.48243 3.21833 3.4768ZM3.18144 6.69505C3.20597 6.69258 3.23069 6.69258 3.25521 6.69505H17.4195C17.4683 6.69443 17.5168 6.70351 17.5621 6.72177C17.6074 6.74003 17.6486 6.76711 17.6833 6.80142C17.7181 6.83573 17.7457 6.8766 17.7645 6.92166C17.7833 6.96672 17.793 7.01507 17.793 7.06391C17.793 7.11274 17.7833 7.1611 17.7645 7.20616C17.7457 7.25122 17.7181 7.29208 17.6833 7.3264C17.6486 7.36071 17.6074 7.38778 17.5621 7.40604C17.5168 7.4243 17.4683 7.43339 17.4195 7.43277H3.25521C3.20678 7.43761 3.15786 7.43287 3.11125 7.41881C3.06464 7.40475 3.02126 7.38165 2.98359 7.35082C2.94591 7.31999 2.91467 7.28203 2.89166 7.23913C2.86865 7.19624 2.85431 7.14923 2.84947 7.10079C2.84462 7.05235 2.84937 7.00344 2.86343 6.95683C2.87749 6.91023 2.9006 6.86683 2.93142 6.82915C2.96225 6.79148 3.0002 6.76024 3.04309 6.73723C3.08599 6.71422 3.133 6.69989 3.18144 6.69505ZM22.2147 8.42869C22.1231 8.43814 22.0313 8.47697 21.9657 8.5578L21.3663 9.28628C21.3562 9.30899 21.3439 9.33062 21.3294 9.35085L16.23 15.6215L19.5315 18.3049L20.7579 16.7926C20.7666 16.7829 20.7758 16.7736 20.7856 16.7649L20.7948 16.7557L25.2671 11.2411C25.3984 11.0795 25.3734 10.8559 25.2118 10.7247L22.4822 8.51153C22.4014 8.44592 22.3064 8.41903 22.2148 8.42853L22.2147 8.42869ZM3.21833 9.90414C3.23062 9.90352 3.24293 9.90352 3.25521 9.90414H17.4195C17.4683 9.90352 17.5168 9.91261 17.5621 9.93087C17.6074 9.94913 17.6486 9.9762 17.6833 10.0105C17.7181 10.0448 17.7457 10.0857 17.7645 10.1308C17.7833 10.1758 17.793 10.2242 17.793 10.273C17.793 10.3218 17.7833 10.3702 17.7645 10.4152C17.7457 10.4603 17.7181 10.5012 17.6833 10.5355C17.6486 10.5698 17.6074 10.5969 17.5621 10.6151C17.5168 10.6334 17.4683 10.6425 17.4195 10.6419H3.25521C3.15785 10.646 3.06281 10.6114 2.9908 10.5458C2.91879 10.4801 2.87566 10.3886 2.87079 10.2913C2.86593 10.194 2.89972 10.0987 2.96482 10.0261C3.02992 9.95362 3.12104 9.90977 3.21833 9.90414ZM3.21833 13.1132C3.23062 13.1126 3.24293 13.1126 3.25521 13.1132H15.741C15.7899 13.1126 15.8383 13.1217 15.8836 13.14C15.9289 13.1582 15.9701 13.1853 16.0049 13.2196C16.0396 13.2539 16.0672 13.2948 16.086 13.3398C16.1049 13.3849 16.1146 13.4333 16.1146 13.4821C16.1146 13.5309 16.1049 13.5793 16.086 13.6243C16.0672 13.6694 16.0396 13.7103 16.0049 13.7446C15.9701 13.7789 15.9289 13.806 15.8836 13.8242C15.8383 13.8425 15.7899 13.8516 15.741 13.851H3.25521C3.15785 13.8551 3.06281 13.8205 2.9908 13.7548C2.91879 13.6892 2.87566 13.5977 2.87079 13.5004C2.86593 13.4031 2.89972 13.3078 2.96482 13.2352C3.02992 13.1627 3.12104 13.1189 3.21833 13.1132ZM3.18144 16.3315C3.20597 16.329 3.23069 16.329 3.25521 16.3315H14.0997C14.1486 16.3309 14.197 16.3399 14.2423 16.3582C14.2876 16.3765 14.3288 16.4035 14.3636 16.4378C14.3983 16.4722 14.4259 16.513 14.4448 16.5581C14.4636 16.6031 14.4733 16.6515 14.4733 16.7003C14.4733 16.7492 14.4636 16.7975 14.4448 16.8426C14.4259 16.8876 14.3983 16.9285 14.3636 16.9628C14.3288 16.9971 14.2876 17.0242 14.2423 17.0425C14.197 17.0607 14.1486 17.0698 14.0997 17.0692H3.25521C3.20678 17.074 3.15786 17.0693 3.11125 17.0552C3.06464 17.0412 3.02126 17.0181 2.98359 16.9872C2.94591 16.9564 2.91467 16.9185 2.89166 16.8756C2.86865 16.8327 2.85431 16.7857 2.84947 16.7372C2.84462 16.6888 2.84937 16.6398 2.86343 16.5932C2.87749 16.5466 2.9006 16.5033 2.93142 16.4656C2.96225 16.4279 3.0002 16.3967 3.04309 16.3737C3.08599 16.3506 3.133 16.3363 3.18144 16.3315ZM15.9992 16.3868L15.7963 18.0098L17.2718 19.2178L18.8395 18.683L15.9992 16.3868ZM15.6857 18.8859L15.575 19.7988L16.4511 19.5037L15.6857 18.8859ZM3.21818 19.5406C3.23047 19.5399 3.24278 19.5399 3.25507 19.5406H13.122C13.1708 19.5399 13.2193 19.549 13.2646 19.5673C13.3098 19.5856 13.3511 19.6126 13.3858 19.6469C13.4206 19.6812 13.4482 19.7221 13.467 19.7672C13.4858 19.8122 13.4955 19.8606 13.4955 19.9094C13.4955 19.9583 13.4858 20.0066 13.467 20.0517C13.4482 20.0967 13.4206 20.1376 13.3858 20.1719C13.3511 20.2062 13.3098 20.2333 13.2646 20.2516C13.2193 20.2698 13.1708 20.2789 13.122 20.2783H3.25507C3.1577 20.2824 3.06266 20.2478 2.99065 20.1822C2.91865 20.1165 2.87551 20.0251 2.87064 19.9277C2.86578 19.8304 2.89958 19.7351 2.96467 19.6626C3.02977 19.5901 3.12089 19.5462 3.21818 19.5406Z" fill="black" fill-opacity="0.7" />
      </svg>
    </div>
  )
}


export const SharedNotes = () => {
  return (
    <div>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.77008 19.8076L6.14529 20.7138L5.97134 19.7305V19.7295L3.209 4.07409L14.8417 2.13566L20.9413 1.11905L22.9256 11.0404C22.9818 11.3226 23.2537 11.508 23.5381 11.4487C23.8203 11.3924 24.0026 11.1185 23.9464 10.8362L21.8632 0.420131C21.8079 0.144105 21.5403 -0.0433844 21.2674 0.00869604L14.7333 1.09822L1.60596 0.00452961C1.4643 -0.0121361 1.32681 0.0378611 1.22057 0.130564C1.11432 0.222226 1.04974 0.353468 1.04245 0.494085L0.00084382 19.243C-0.0147803 19.5191 0.188333 19.7597 0.463318 19.7899L5.01306 20.2951L5.21618 21.445C5.24117 21.5877 5.3245 21.7127 5.44533 21.7918C5.53178 21.8471 5.62969 21.8752 5.72969 21.8752C5.77239 21.8752 5.81406 21.87 5.85572 21.8596L10.0222 20.8179C10.3013 20.7482 10.4711 20.4659 10.4013 20.1867C10.3315 19.9076 10.0482 19.7368 9.77008 19.8076ZM21.8746 20.8336C21.1632 20.8336 20.5361 21.1929 20.1601 21.7377L15.5073 19.4118C15.5781 19.2024 15.625 18.9826 15.625 18.7504C15.625 18.5181 15.5781 18.2983 15.5073 18.0889L20.1601 15.763C20.5361 16.3078 21.1632 16.6671 21.8746 16.6671C23.0235 16.6671 23.9578 15.7328 23.9578 14.5839C23.9578 13.435 23.0235 12.5007 21.8746 12.5007C20.7257 12.5007 19.7914 13.435 19.7914 14.5839C19.7914 14.6485 19.8049 14.71 19.8101 14.7735L14.9333 17.2119C14.5646 16.8765 14.0792 16.6671 13.5417 16.6671C12.3929 16.6671 11.4585 17.6015 11.4585 18.7504C11.4585 19.8992 12.3929 20.8336 13.5417 20.8336C14.0792 20.8336 14.5646 20.6242 14.9333 20.2888L19.8101 22.7272C19.8049 22.7907 19.7914 22.8522 19.7914 22.9168C19.7914 24.0657 20.7257 25 21.8746 25C23.0235 25 23.9578 24.0657 23.9578 22.9168C23.9578 21.7679 23.0235 20.8336 21.8746 20.8336Z" fill="#222222" />
      </svg>
    </div>
  )
}



export const CommentCount = () => {
  return (
    <div>
      <svg width="20" height="17.07" viewBox="0 0 129 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0C0.7 0 0 0.7 0 1.5V86.5C0 87.3 0.7 88 1.5 88H104.5C105.3 88 106.494 88.494 107.094 89.094L127 109C127.6 109.6 128.094 109.394 128.094 108.594V1.5C128.094 0.7 127.394 0 126.594 0H1.5Z" fill="black" />
      </svg>
    </div>
  )
}


export const SortBy = () => {
  return (
    <div style={{ transform: 'translateY(4px)' }}>
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5768 0H4.94727V1.76481H15.5768V0Z" fill="black" />
        <path d="M13.2783 3.23535H4.94727V5.00016H13.2783V3.23535Z" fill="black" />
        <path d="M10.9801 6.47046H4.94727V8.23527H10.9801V6.47046Z" fill="black" />
        <path d="M0 9.11685H1.73077V0.0109863H4.03846V9.11685H5.76923L2.88461 14.9992L0 9.11685Z" fill="black" />
      </svg>
    </div>
  )
}



export const DropDown = () => {
  return (
    <div>
      <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.61225 5.5L11 0H8.90476L5.61225 3.36735L2.13265 0H0L5.61225 5.5Z" fill="black" />
      </svg>
    </div>
  )
}



export const Lock = () => {
  return (
    <div>
      <svg width="57" height="84" viewBox="0 0 57 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.3238 33.5295H50.2944V21.7943C50.2944 9.77711 40.5177 0 28.5001 0C16.4829 0 6.70602 9.77691 6.70602 21.7943V33.5295H1.6766C0.750681 33.5295 0 34.28 0 35.2059V82.1473C0 83.0732 0.750681 83.8237 1.6766 83.8237H55.3236C56.2493 83.8237 57 83.0732 57 82.1473V35.2061C57.0002 34.2802 56.2495 33.5295 55.3238 33.5295ZM26.8239 51.9708C26.8239 51.0451 27.5744 50.2942 28.5003 50.2942C29.426 50.2942 30.1767 51.0451 30.1767 51.9708V65.3826C30.1767 66.3084 29.426 67.059 28.5003 67.059C27.5744 67.059 26.8239 66.3084 26.8239 65.3826V51.9708ZM10.059 21.7943C10.059 11.6258 18.3316 3.35301 28.5003 3.35301C38.6688 3.35301 46.9414 11.6256 46.9414 21.7943V33.5295H10.059V21.7943Z" fill="white" fill-opacity="0.7" />
      </svg>
    </div>
  )
}


export const UnLock = () => {
  return (
    <div>
      <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M92.1201 37.6H84.6001H48.88V24.4401C48.88 10.9641 37.9162 0 24.4401 0C10.9638 0 0 10.9638 0 24.4401C0 25.4785 0.841593 26.32 1.88015 26.32C2.91848 26.32 3.76007 25.4785 3.76007 24.4401C3.76007 13.0372 13.037 3.76007 24.4401 3.76007C35.8431 3.76007 45.1202 13.037 45.1202 24.4401V37.6H39.4802C38.4419 37.6 37.6003 38.4416 37.6003 39.48V92.1201C37.6003 93.1584 38.4419 94 39.4802 94H92.1201C93.1582 94 94 93.1584 94 92.1201V39.4802C94 38.4419 93.1582 37.6 92.1201 37.6ZM63.9201 58.2801C63.9201 57.242 64.7617 56.3999 65.8 56.3999C66.8383 56.3999 67.6799 57.242 67.6799 58.2801V73.3202C67.6799 74.3583 66.8383 75.2001 65.8 75.2001C64.7617 75.2001 63.9201 74.3583 63.9201 73.3202V58.2801Z" fill="black" fill-opacity="0.5" />
      </svg>
    </div>
  )
}


export const ArrowButton = (props) => {
  return (

    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 48 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.7071 8.70711C48.0976 8.31659 48.0976 7.68342 47.7071 7.2929L41.3431 0.928935C40.9526 0.538411 40.3195 0.538411 39.9289 0.928935C39.5384 1.31946 39.5384 1.95262 39.9289 2.34315L45.5858 8L39.9289 13.6569C39.5384 14.0474 39.5384 14.6805 39.9289 15.0711C40.3195 15.4616 40.9526 15.4616 41.3431 15.0711L47.7071 8.70711ZM-1.75457e-07 9L47 9L47 7L1.75457e-07 7L-1.75457e-07 9Z"
        fill="#222222"
      />
    </svg>

  )
}

export const Profile = (props) => {
  return (
    <div >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 296 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M148 0C230 0 296 66 296 148C296 230 230 296 148 296C66 296 0 230 0 148C0 66 66 0 148 0ZM148 51C207 51 207 140 148 140C89 140 89 51 148 51ZM237 233C237 240 231 246 224 246H72C65 246 60 240 60 233C59 113 238 113 237 233Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};


export const Delete = () => {
  return (
    <div>
      <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1299 3.13874C12.3848 3.13874 14.6393 3.13874 16.8939 3.13874C16.5332 -1.04643 10.4909 -1.04606 10.1299 3.13874Z" fill="#222222" />
        <path d="M1.68991 14.6118C1.87194 17.5386 2.05435 20.4657 2.23675 23.3924C2.34109 25.0712 2.12528 27.82 3.07896 29.268C4.88087 32.0041 7.9855 31.5038 10.8071 31.5038C13.556 31.5038 16.3044 31.5038 19.0536 31.5038C22.2082 31.5038 24.3813 29.9094 24.5884 26.58C24.7224 24.4279 24.8568 22.2758 24.9908 20.1237C25.2674 15.6822 25.544 11.2407 25.8206 6.79883C17.6147 6.79883 9.40908 6.79883 1.20312 6.79883C1.36526 9.40316 1.5274 12.0075 1.68991 14.6118ZM18.0241 11.8397C18.0294 11.6588 18.3109 11.6581 18.3056 11.8397C18.1649 16.714 18.0241 21.5879 17.8834 26.4621C17.8781 26.643 17.5966 26.6438 17.6019 26.4621C17.7426 21.5882 17.8834 16.714 18.0241 11.8397ZM13.3713 11.8397C13.3713 11.6581 13.6528 11.6581 13.6528 11.8397C13.6528 16.714 13.6528 21.5879 13.6528 26.4621C13.6528 26.6438 13.3713 26.6438 13.3713 26.4621C13.3713 21.5882 13.3713 16.714 13.3713 11.8397ZM8.99961 11.8397C9.14035 16.714 9.28109 21.5879 9.42184 26.4621C9.42709 26.6438 9.1456 26.643 9.14035 26.4621C8.99961 21.5879 8.85886 16.714 8.71812 11.8397C8.71286 11.6584 8.99435 11.6588 8.99961 11.8397Z" fill="#222222" />
        <path d="M0.0691194 5.98824C0.0691194 6.68445 -0.241269 6.51744 0.453445 6.51744C9.28768 6.51744 18.1219 6.51744 26.9562 6.51744C26.9562 6.04829 26.9562 5.57914 26.9562 5.10962C17.9939 5.10962 9.03171 5.10962 0.0691194 5.10962C0.0691194 5.40237 0.0691194 5.69512 0.0691194 5.98824Z" fill="#222222" />
        <path d="M26.5712 3.42041C25.0658 3.42041 23.5604 3.42041 22.055 3.42041C16.2612 3.42041 10.4674 3.42041 4.67402 3.42041C3.12771 3.42041 1.5814 3.42041 0.0350912 3.42041C-0.0223324 3.42041 0.0688699 3.46545 0.0688699 3.94961C0.0688699 4.24273 0.0688699 4.53548 0.0688699 4.82823C9.03109 4.82823 17.9933 4.82823 26.9559 4.82823C26.9559 4.44503 26.9559 4.06183 26.9559 3.67863C26.9555 3.26128 27.192 3.42041 26.5712 3.42041Z" fill="#222222" />
      </svg>
    </div>
  )
}
