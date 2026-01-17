import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Temecula Wedding Officiant",
  description:
    "Read testimonials from happy couples who chose Pastor Jeff Johnson for their Temecula Wine Country wedding. Over 20 years of 5-star reviews from weddings at Faulkner Winery, Europa Village, and venues throughout Southern California.",
  alternates: {
    canonical: "https://www.pastormywedding.com/reviews",
  },
  openGraph: {
    title: "Reviews & Testimonials | Temecula Wedding Officiant",
    description:
      "Read testimonials from happy couples who chose Pastor Jeff Johnson for their Temecula Wine Country wedding.",
    url: "https://www.pastormywedding.com/reviews",
  },
};

const reviews = [
  {
    id: "kimmie-lam-2024",
    title: "Meaningful",
    content:
      "Thank you Pastor Jeff! We are so grateful to you for officiating our wedding and making the ceremony so meaningful. We are so blessed to have you be part of such an important moment in our lives.",
    author: "Kimmie and Lam",
    date: "December 2024",
    venue: "Villa De A'more",
  },
  {
    id: "stephanie-jordan-2024",
    title: "The Perfect Choice",
    content:
      "Pastor Jeff and Christy could not have been a more perfect choice for our wedding. The communication was extremely quick, professional, and informative from the very beginning. My husband and I felt at ease from the moment we spoke with Pastor Jeff on our first phone call. We felt as if we had known Pastor Jeff for a long time. He worked with our interpreter to prepare for the ceremony. Pastor Jeff was personable and funny with a natural cadence in the way he spoke. Many of our guests let us know how much they enjoyed the ceremony and how Pastor Jeff did such an amazing job. If I could do it again I would hire Pastor Jeff and his wife Christy to work with us on our wedding day. I cannot say enough great things about them.",
    author: "Stephanie and Jordan",
    date: "June 2024",
    venue: "Oak Glen, CA",
  },
  {
    id: "helene-brenan-2024",
    title: "Absolutely Amazing Ceremony",
    content:
      "It was an absolutely amazing ceremony. Exactly what we wanted. Thank you both for making it a day we'll never forget a moment of....",
    author: "Helene and Brenan",
    date: "June 2024",
    venue: "Europa Village Wineries & Resort, Temecula",
  },
  {
    id: "kat-mom-2024",
    title: "Thank You Pastor Jeff",
    content:
      "Thank you for the wonderful ceremony that you officiated for Katherine and Michael. We received numerous compliments on the ceremony, the Christian references and of course your humor. The ceremony was perfect!! Thank you Thank you!!",
    author: "Kat's Mom",
    date: "April 2024",
    venue: "Peltzer Winery",
  },
  {
    id: "katie-meredyth-2019",
    title: "Amazing Officiant",
    content:
      "Jeff did such an amazing job officiating our wedding! He married my husband's brother and his wife a couple of years ago and we were so happy to have him marry us. We met with him in person to discuss the details of the ceremony and he gave us a sample of what he will say, which I appreciated! He was open to add/remove anything from his script. It was a beautiful ceremony and we loved every minute of it. He also stayed for part of the reception and gave a blessing for dinner. Thank you!",
    author: "Katie Meredyth",
    date: "September 2019",
    venue: "",
  },
  {
    id: "alexandra-2017",
    title: "Personable and Kind",
    content:
      "Jeff did a wonderful job officiating our wedding. My husband and I live overseas and were planning our wedding from afar, so it was really important that all of our vendors be strong communicators and good with email. Jeff and Christy were excellent. We were able to meet them via Skype, and immediately decided to hire Jeff to officiate. He was personable and kind. I felt like I knew him even though we had never met in person. He did such a great job with our ceremony. It was very special and heartfelt. I wouldn't change a thing. Thank you Jeff!",
    author: "Alexandra",
    date: "January 2017",
    venue: "",
  },
  {
    id: "vianca-kevin-2016",
    title: "Extremely Impactful",
    content:
      "Pastor Jeff Johnson, you provided a very beautiful wedding ceremony! Your prayer and preaching were perfect and we will never forget the hand ceremony! The hand ceremony was extremely impactful; we were both really moved by it and it just reinforced how much we both really love each other and want to spend the rest of our lives together. Our relatives were really moved as well and could not stop raving how much they enjoyed the ceremony, with my sister-in-law stating that she could have just attended the ceremony and she would have been content. Thank you so much for starting our marriage on the right path!",
    author: "Vianca and Kevin",
    date: "March 2016",
    venue: "Faulkner Winery, Temecula, CA",
  },
  {
    id: "nick-laura-2015",
    title: "Highly Recommended",
    content:
      "Nick and I just married this past weekend. All I can say is from my first contact with Pastor Jeff he was very kind and informative. He worked with us and our scheduling and sending our payment via PayPal, you do receive a receipt via your email. Few days before the wedding make sure to get in touch with Pastor Jeff and tell him what words you want said in your ceremony and if you each have your vows or not. All I know is that I was very blessed to have chosen him to marry us. Everyone of our guests really liked it and gave a nice review of Pastor Jeff. They thought what he said was very touching and special. I highly recommend his services for your future nuptials. Best wishes to everyone who chooses Pastor Jeff you will not regret it. Like everyone said to us 'lovely ceremony'",
    author: "Nick and Laura",
    date: "October 2015",
    venue: "",
  },
  {
    id: "cheryl-ben-2014",
    title: "Absolutely Wonderful",
    content:
      "Thank you so much for officiating our wedding! You were absolutely wonderful! Your confidence throughout the entire ceremony gave us confidence up there in front of all those people (especially since we were both a little nervous after watching our ring bearer and flower girl have an intense case of stage fright, haha)! Thank you for talking us through each section so that we knew what we were doing and what we needed to say. And the way you explained the different sands we used for our sand ceremony and the meaning/symbolism behind it was so perfect! We can't thank you enough for making everything go so smoothly!",
    author: "Cheryl and Ben",
    date: "August 2014",
    venue: "",
  },
  {
    id: "matt-priscilla-2014",
    title: "A Special Thank You",
    content:
      "We just wanted to say thank you very much for marrying us, our ceremony could not have been any better. You emphasized God's plan for marriage and we were truly blessed with everything you shared. A special thank you to Christy. We are so glad to have met you, maybe we'll come by your church and say Hi!",
    author: "Matt and Priscilla",
    date: "February 2014",
    venue: "",
  },
  {
    id: "jerri-paul-2013",
    title: "Beautiful Ceremony",
    content:
      "Thank you again for the beautiful ceremony you performed for our kids. Especially loved the part about the significance of hands, so true. The breaking of the glass was perfect and a first for you!",
    author: "Jerri and Paul R",
    date: "October 2013",
    venue: "",
  },
  {
    id: "laura-charles-2013",
    title: "Beautifully Spoken",
    content:
      "I have to thank you again so much for making our wedding day ceremony absolutely perfect! We had many people tell us how beautifully spoken you were, and we absolutely agree. We were so excited to get to have you as a part of our special day. You are extremely professional while having such a great talent and personality. I appreciate all of your communication with me leading up to our event to create a customized fabulous day. I greatly enjoyed working with you, and your wife as well, you were both so wonderful and we appreciate you being so accommodating and pleasant to work with. Thank you so much for everything!",
    author: "Laura Charles",
    date: "June 2013",
    venue: "",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="min-h-[50vh] flex items-center justify-center text-center bg-[linear-gradient(135deg,rgba(44,62,80,0.8),rgba(139,115,85,0.7)),url('/images/reviews-hero.jpg')] bg-cover bg-center text-white py-24 px-6">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <h1 className="!text-white text-4xl md:text-5xl mb-4 [text-shadow:2px_4px_8px_rgba(0,0,0,0.4)] animate-fade-in-up">
            Reviews &amp; Testimonials
          </h1>
          <p className="text-xl md:text-2xl italic opacity-95 animate-fade-in-up-delay font-serif">
            What couples are saying about Pastor Jeff
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <article key={review.id} className="bg-white p-7 rounded-2xl shadow-[var(--shadow-soft)] relative transition-all duration-400 border border-black/5 review-quote review-stars hover:-translate-y-1.5 hover:shadow-[var(--shadow-medium)]">
                <h3 className="text-lg font-semibold text-accent mb-3">{review.title}</h3>
                <blockquote className="italic text-text mb-6 leading-relaxed relative z-10">
                  &ldquo;{review.content}&rdquo;
                </blockquote>
                <p className="font-semibold text-primary text-lg">{review.author}</p>
                <p className="text-sm text-text-light mt-1">
                  {review.date}
                  {review.venue && ` - ${review.venue}`}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-accent-light after:rounded">
              Moments We&apos;ve Shared
            </h2>
            <p className="text-text-light max-w-[600px] mx-auto mt-6 text-lg">
              Beautiful ceremonies from couples Pastor Jeff has had the honor of marrying
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <Image src="/images/wed8.jpg" alt="Wedding ceremony at Temecula winery" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <Image src="/images/wed7.png" alt="Couple exchanging vows" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <Image src="/images/couple1.png" alt="Happy couple after ceremony" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 text-center">
          <h2 className="!text-white mb-4">Join Our Happy Couples</h2>
          <p className="text-white/90 max-w-[600px] mx-auto mb-8 text-lg">
            Let Pastor Jeff make your wedding day ceremony one to remember.
          </p>
          <Link
            href="/contact"
            className="inline-block py-4 px-10 bg-gradient-to-br from-accent to-accent-light text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-400 uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,115,85,0.4)]"
          >
            Schedule Your Wedding
          </Link>
        </div>
      </section>
    </main>
  );
}
