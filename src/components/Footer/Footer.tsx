import classNames from 'classnames';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__block}>
				<Link to='/' className='header__logo'>
					<img src='/img/logo.svg' alt='' />
				</Link>
				<div className={styles.footer__links}>
					<Link to='/contact' className={styles.footer__contact}>
						Contact us
					</Link>
					<Link to='/promotions' className={styles.footer__contact}>
						Promotions
					</Link>
				</div>

				<div className={styles.footer__social}>
					<span className={classNames(styles.btn, styles.purple)}>
						<FaInstagram className={styles.footer__img} />
					</span>
					<span className={classNames(styles.btn, styles.blue)}>
						<FaFacebookF className={styles.footer__img} />
					</span>
				</div>
			</div>
			<p className={styles.copyraight}>
				© Copyright 2024 All Rights Reserved. 6+
			</p>
		</div>
	);
};
