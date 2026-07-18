import Image from "next/image";
import type { PlaceholderRestaurant } from "@/data/placeholder-restaurants";

interface RestaurantCardProps {
  restaurant: PlaceholderRestaurant;
  groupSignal?: string;
}

export function RestaurantCard({ restaurant, groupSignal }: RestaurantCardProps) {
  const location = restaurant.area ? ` · ${restaurant.area}` : "";

  return (
    <article className="restaurant-card">
      <div className="card-photo">
        <Image
          src="/images/restaurant-card-placeholder.webp"
          alt="صورة تجريبية عامة للطعام، وليست صورة للمطعم"
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="placeholder-label">صورة تجريبية</span>
        <button className="save-button" type="button" aria-label={`حفظ ${restaurant.name}`}>
          ♡
        </button>
      </div>
      <div className="card-body">
        <div className="card-title-row">
          <div>
            <h3 lang="en" dir="ltr">{restaurant.name}</h3>
            <p>{restaurant.cuisine}{location} · وقت الوصول غير متوفر</p>
          </div>
          <span className="rating">التقييم غير متوفر</span>
        </div>
        <div className="tag-row">
          {restaurant.tags.map((tag) => <span key={tag}>{tag}</span>)}
          <strong aria-label={`مستوى السعر ${restaurant.price}`}>{restaurant.price}</strong>
        </div>
        <p className="fit-reason"><span>يناسبك لأن</span>{restaurant.whyItFits}</p>
        <p className="hours-status">ساعات العمل غير موثقة · تحقّق قبل الزيارة</p>
        <div className="card-footer">
          <button type="button" className="details-button">عرض التفاصيل</button>
          {groupSignal ? <span className="group-signal">{groupSignal}</span> : null}
        </div>
      </div>
    </article>
  );
}
