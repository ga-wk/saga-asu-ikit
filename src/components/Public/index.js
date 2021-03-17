import React from 'react';

import './index.scss';
import '../../styles/reprise.scss';

export const Semester = () => (
    <div className="semester__header container">
        <div className="semester">
            <select className="semester__list">
                <option className="semester__item">5 семестр</option>
                <option className="semester__item">4 семестр</option>
                <option className="semester__item">3 семестр</option>
                <option className="semester__item">2 семестр</option>
                <option className="semester__item">1 семестр</option>
            </select>
        </div>
        <button className="semester__helper">
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.9042 20.249H8.69673C7.84636 20.249 7.15527 20.9401 7.15527 21.7905V23.4578C7.15527 24.3082 7.84636 24.9993 8.69673 24.9993H9.9042C10.7546 24.9993 11.4457 24.3082 11.4457 23.4578V21.7905C11.4457 20.9376 10.7546 20.249 9.9042 20.249Z" fill="#222322" />
                <path d="M1.39061 7.34251L3.61803 7.61998C4.32454 7.70733 4.99507 7.30141 5.24942 6.63601C5.57055 5.79591 6.01758 5.13308 6.59049 4.65009C7.40235 3.9667 8.41199 3.62244 9.61947 3.62244C10.8706 3.62244 11.8674 3.95129 12.6073 4.60641C13.3472 5.2641 13.7146 6.05025 13.7146 6.97256C13.7146 7.63539 13.5065 8.2417 13.0903 8.79149C12.8206 9.14089 11.9908 9.87566 10.606 10.9984C9.21869 12.1211 8.2964 13.1333 7.83397 14.0324C7.36125 14.9522 7.19683 15.9721 7.15572 16.9947C7.11978 17.8707 7.81855 18.6003 8.69719 18.6003H9.95605C10.7576 18.6003 11.4204 17.9863 11.4924 17.1899C11.5438 16.617 11.6388 16.1828 11.7827 15.8874C12.0242 15.3813 12.6485 14.7133 13.6504 13.8809C15.5901 12.2752 16.8541 11.0061 17.4476 10.0709C18.0385 9.13832 18.3365 8.14921 18.3365 7.10359C18.3365 5.21529 17.5324 3.55822 15.9215 2.13493C14.3133 0.711643 12.1449 0 9.42167 0C6.83201 0 4.74333 0.701367 3.15048 2.10667C1.79399 3.30387 0.969305 4.72202 0.678996 6.35854C0.589052 6.8364 0.915328 7.28342 1.39061 7.34251Z" fill="#222322" />
            </svg>
        </button>
    </div>
);


export const Searcher = () => (
    <div className="searcher__header container">
        <div className="searcher__input">
            <input className="input" type="text"></input>
            <button className="searcher__btn">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M24.6945 23.2216L17.5852 16.1123C18.9623 14.4113 19.7915 12.2499 19.7915 9.89575C19.7915 4.43956 15.3519 0 9.8957 0C4.43951 0 0 4.43951 0 9.8957C0 15.3519 4.43956 19.7915 9.89575 19.7915C12.2499 19.7915 14.4113 18.9623 16.1123 17.5852L23.2216 24.6945C23.4248 24.8977 23.6914 24.9998 23.9581 24.9998C24.2248 24.9998 24.4915 24.8977 24.6946 24.6945C25.1019 24.2873 25.1019 23.6289 24.6945 23.2216ZM9.89575 17.7081C5.58745 17.7081 2.08333 14.204 2.08333 9.8957C2.08333 5.5874 5.58745 2.08328 9.89575 2.08328C14.2041 2.08328 17.7082 5.5874 17.7082 9.8957C17.7082 14.204 14.204 17.7081 9.89575 17.7081Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    </div>
);
