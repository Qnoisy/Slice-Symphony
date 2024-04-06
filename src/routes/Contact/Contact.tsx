import styles from './Contact.module.scss';

interface ContactProps {}

export const Contact = ({}: ContactProps) => {
	return (
		<div className={styles.contact}>
			<h2 className={styles.contact__title}>Contact us</h2>
			<div className={styles.contact__text}>
				Contact us by phone, email or contact form set below. We value your time
				and will do our best to respond to your queries as soon as possible.
			</div>
			<h3 className={styles.contact__subTitle}>Ukraine</h3>
			<h4 className={styles.contact__subTitle}>CALL CENTRE:</h4>
			<div className={styles.contact__text}>+380 123 456 789</div>
			<h4 className={styles.contact__subTitle}>General e-mail:</h4>
			<div className={styles.contact__text}>info@gmail.com</div>
			<h4 className={styles.contact__subTitle}>
				Media, partnerships, advertising:
			</h4>
			<div className={styles.contact__text}>info2@gmail.com</div>
		</div>
	);
};
