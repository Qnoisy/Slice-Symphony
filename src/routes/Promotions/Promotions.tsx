import { Button } from 'components/Button';
import styles from './Promotions.module.scss';

interface PromotionsProps {}

export const Promotions = ({}: PromotionsProps) => {
	return (
		<div className={styles.promotions}>
			<h2 className={styles.promotions__title}>Promotions</h2>
			<ul className={styles.promotions__list}>
				<li className={styles.promotions__li}>
					<div className={styles.promotions__img}></div>
					<div className={styles.promotions__block}>
						<h3 className={styles.promotions__blockTitle}>Title 1</h3>
						<div className={styles.promotions__text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							provident nulla repellendus omnis ut adipisci nihil quidem
							laboriosam sequi tempora unde voluptatem ducimus exercitationem
							suscipit quia, dolorum architecto minima officiis!
						</div>
						<Button>Add Promo</Button>
					</div>
				</li>
				<li className={styles.promotions__li}>
					<div className={styles.promotions__img}></div>
					<div className={styles.promotions__block}>
						<h3 className={styles.promotions__blockTitle}>Title 1</h3>
						<div className={styles.promotions__text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							provident nulla repellendus omnis ut adipisci nihil quidem
							laboriosam sequi tempora unde voluptatem ducimus exercitationem
							suscipit quia, dolorum architecto minima officiis!
						</div>
						<Button>Add Promo</Button>
					</div>
				</li>
				<li className={styles.promotions__li}>
					<div className={styles.promotions__img}></div>
					<div className={styles.promotions__block}>
						<h3 className={styles.promotions__blockTitle}>Title 1</h3>
						<div className={styles.promotions__text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							provident nulla repellendus omnis ut adipisci nihil quidem
							laboriosam sequi tempora unde voluptatem ducimus exercitationem
							suscipit quia, dolorum architecto minima officiis!
						</div>
						<Button>Add Promo</Button>
					</div>
				</li>
			</ul>
		</div>
	);
};
