import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Wedding Vows & Ceremony Script",
  description:
    "View sample wedding vows and ceremony scripts from Pastor Jeff Johnson, Temecula's trusted wedding officiant. Includes welcoming words, hand ceremony, unity ceremony, ring exchange, and more for your Wine Country wedding.",
  alternates: {
    canonical: "https://www.pastormywedding.com/sample-vows",
  },
  openGraph: {
    title: "Sample Wedding Vows & Ceremony Script | Pastor My Wedding",
    description:
      "View sample wedding vows and ceremony scripts. Customize your Temecula Wine Country wedding ceremony.",
    url: "https://www.pastormywedding.com/sample-vows",
  },
};

export default function SampleVowsPage() {
  return (
    <main>
      <section className="page-hero-image page-hero-vows">
        <div className="container">
          <h1>Sample Vows &amp; Ceremony</h1>
          <p>A guide to what your wedding ceremony can include</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="vows-content">
            <p className="text-center mb-4 text-italic">
              The following is a sample of what your wedding ceremony may include. All elements can
              be customized to match your preferences and vision.
            </p>

            <div className="vows-section">
              <h3>Giving Away of the Bride</h3>
              <p>
                Your giving away words... For example, to the father of the bride: &ldquo;Who gives
                this woman away?&rdquo; ... &ldquo;Her mother and I do.&rdquo;
              </p>
            </div>

            <div className="vows-section">
              <h3>Welcoming</h3>
              <p>
                Good evening. We gather here today to witness and celebrate an act of deep love.
                [Bride] and [Groom], in their devotion, respect, and love for each other wish to
                unite in the holy bond of marriage, and to dedicate themselves to each other&apos;s
                happiness and well-being as life mates and partners. On behalf of them, I welcome
                you all.
              </p>
              <p>
                Although this is their day, it is also a tribute to their family and friends. For
                knowing you and interacting with you has helped to make our Bride and Groom who they
                needed to be to find each other. They would like to thank you all for that. All of
                you are the threads of which are woven the tapestry of their lives. You all hold a
                place in their hearts reserved for those that they have chosen to call
                &ldquo;Family&rdquo; and &ldquo;Friends&rdquo; and they are deeply grateful for each
                and every one of you here today.
              </p>
            </div>

            <div className="vows-section">
              <h3>Parental Honoring</h3>
              <p>
                [Bride] and [Groom] want to acknowledge their parents on this occasion. They offer
                their profound gratitude to their parents for all the love and care they showed in
                raising them. The unconditional gifts of love and support that you have continually
                offered have inspired them to become who they are today, and they thank you, from
                the bottom of their hearts, for guiding them to this celebration of love here today.
                Without you, this day would not be possible.
              </p>
              <blockquote>
                As we recognize God&apos;s Presence - Please join me as we now request His Blessing.
                Let&apos;s Pray.
              </blockquote>
            </div>

            <div className="vows-section">
              <h3>Foundation</h3>
              <p>
                After speaking to you both, it is obvious that you already know some of the great
                blessings marriage has to offer. It is an opportunity to feel the joy of taking care
                of someone who takes care of you, to be challenged towards growth yet gently
                nurtured, to love deeply and receive it in return. It is about trust, friendship and
                having a partner to share all life has to offer.
              </p>
              <p>
                It is a commitment to participate in a process of mutual evolution, understanding
                and forgiveness. It is indeed a sacred union to be treated with reverence. Marriage
                is a safe place to grow and become wiser. It is a place to evolve into better
                people; so that you can go out in the world and make a difference by spreading the
                joy and wisdom that you have found with each other. Together in this marriage, you
                shall contribute more fully, for you both shall be more full.
              </p>
              <blockquote>
                <p>
                  <strong>Love holds it all together. Without love we have nothing.</strong>
                </p>
                <p>Love covers a multitude of imperfections/mistakes.</p>
                <p>
                  Love bears all things, believes all things, hopes all things, endures all things.
                </p>
                <p>
                  <strong>LOVE NEVER FAILS.</strong> - 1 Corinthians 13
                </p>
              </blockquote>
            </div>

            <div className="vows-section">
              <h3>The Hands Ceremony</h3>
              <p>
                &ldquo;[Bride] and [Groom], please face each other and take each other&apos;s hands,
                so that you may see the gift that they are to you.&rdquo;
              </p>
              <ul>
                <li>
                  These are the hands of your best friend, young and strong and full of love for
                  you, that are holding yours on your wedding day as you promise to love each other
                  today, tomorrow and forever.
                </li>
                <li>
                  These are the hands that will work alongside yours as together you build your
                  future.
                </li>
                <li>
                  These are the hands that will passionately love you and cherish you through the
                  years.
                </li>
                <li>
                  These are the hands that will hold you when fear or grief temporarily comes your
                  way.
                </li>
                <li>
                  These are the hands that will countless times wipe the tears of sorrow and of joy
                  from your eyes.
                </li>
                <li>These are the hands that will tenderly hold your children.</li>
                <li>
                  These are the hands that will give you support and encouragement to chase down
                  your dreams.
                </li>
                <li>
                  These are the hands that will hold you tight as you struggle through difficult
                  times.
                </li>
                <li>These are the hands that will give you strength when you need it.</li>
                <li>
                  And lastly, these are the hands that even when wrinkled and aged will still be
                  reaching for yours, still giving you the same unspoken tenderness with just a
                  touch.
                </li>
              </ul>
            </div>

            <div className="vows-section">
              <h3>Unity Ceremony</h3>
              <p>
                Please invite us to come around to the table and include your words on unity and
                coming together as one by pouring the red and white wines together.
              </p>
              <ul>
                <li>[Groom] will pour the red wine into the empty glass</li>
                <li>[Bride] will pour the white wine into the empty glass</li>
                <li>
                  We would like you to please bless the glass of wine for us, and direct us to each
                  take a sip to complete the unity ceremony
                </li>
              </ul>
            </div>

            <div className="vows-section">
              <h3>The Questions</h3>
              <p>
                &ldquo;[Bride] and [Groom], if you are ready to step into the holy circle of
                matrimony please so indicate by joining hands.&rdquo;
              </p>
              <p>
                Do you, [Groom], take [Bride] as your wife, to love her, to cherish her, nurture
                her, and support her, in times of joy and in times of difficulty? Do you promise to
                remain by her side regardless of what trouble befalls you, and in the presence of
                temptation to forsake this love, do you promise to remain steadfast and true? Do you
                promise with all your heart and soul to honor this vow till death do you part? If so
                answer now, &ldquo;I do.&rdquo;
              </p>
              <p>
                Do you, [Bride], take [Groom] as your husband, to love him, to cherish him, nurture
                him, and support him, in times of joy and in times of difficulty? Do you promise to
                remain by his side regardless of what trouble befalls you, and in the presence of
                temptation to forsake this love, do you promise to remain steadfast and true? Do you
                promise with all your heart and soul to honor this vow till death do you part? If so
                answer now, &ldquo;I do.&rdquo;
              </p>
            </div>

            <div className="vows-section">
              <h3>Ring Ceremony</h3>
              <p>
                And so we come to the presentation of rings by which you symbolize and bind your
                love.
              </p>
              <p>
                Let the seamless circle of these rings become the symbol of your endless love and
                unending faithfulness. Your wedding rings are most special because they say that
                even in your uniqueness you have chosen to be bonded, to allow the presence of
                another human being to enhance who you are. As you wear them through time, they will
                reflect not only who you are but also the glorious union that you are now creating.
              </p>
              <p>
                &ldquo;[Groom], place the ring on [Bride&apos;s] finger and repeat after me: With
                this ring, I pledge my love and faithfulness to you for better, for worse, for
                richer, for poorer, in sickness and in health as long as we both shall live.&rdquo;
              </p>
              <p>
                &ldquo;[Bride], place the ring on [Groom&apos;s] finger and repeat after me: With
                this ring, I pledge my love and faithfulness to you for better, for worse, for
                richer, for poorer, in sickness and in health as long as we both shall live.&rdquo;
              </p>
            </div>

            <div className="vows-section">
              <h3>Pronouncement</h3>
              <p>
                By the power vested in me, I now pronounce you husband and wife. You may kiss the
                bride!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <div className="feature-image-section">
        <div className="feature-image">
          <Image
            src="/images/bio1.jpg"
            alt="Beautiful wedding ceremony moment"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="feature-image-fill"
          />
        </div>
        <div className="feature-content">
          <h2>Your Story, Your Way</h2>
          <p>
            Every couple has a unique story, and your ceremony should reflect that. Whether you want
            a traditional exchange of vows, a unity ceremony with wine or sand, or something
            entirely your own, Pastor Jeff will help you create a ceremony that speaks to your hearts.
          </p>
          <p>
            From the hands ceremony to the ring exchange, every element can be personalized
            to make your wedding day truly unforgettable.
          </p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container text-center">
          <h2>Customize Your Ceremony</h2>
          <p className="section-subtitle">
            Pastor Jeff will work with you to personalize every aspect of your ceremony to make it
            truly special and meaningful.
          </p>
          <Link href="/contact" className="btn">
            Schedule Your Wedding
          </Link>
        </div>
      </section>
    </main>
  );
}
