import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <div className="text--center">
              <img
                className={styles.featureSvg}
                src={require('@site/static/img/collab.png').default}
                alt=""
              />
            </div>
            <div
              className="text--center padding-horiz--md col col--8 mt-10 mx-auto"
              style={{ marginTop: '20px' }}
            >
              <h2>
                How Gitcoin Passport is becoming a necessary component for
                decentralised identity?
              </h2>
              <p>
                The Gitcoin Passport is a collaborative and secure identity
                network that helps users collect identity attestations from
                different providers of web 2.0 and web 3.0 technologies.
              </p>

              <p>
                Many online social organizations have difficulty ensuring that
                every participant is a unique human being and thus find it
                difficult to prevent sybil attack. Most existing digital
                identity solutions are either centralized or individualistic .
                However, identities are naturally intersecting and social; each
                person shares different data and relationships with a unique set
                of others. The Gitcoin Passport aims to create a more
                collaborative and secure infrastructure for digital identities
                by capturing the richness of our diversely shared lives.
              </p>

              <p>
                There are many ways and ways to verify your personality. For
                example: Centralized method includes National ID card
                verification, KYC process, etc, while decentralized way includes
                @proof of humanity @BrightID @poapxyz, Online Activity, token
                transfer, NFT ownerships, etc. It can be difficult to integrate
                every method into a single system. The Gitcoin Passport is a
                decentralized identity network that provides a single, secure,
                and decentralized way to verify your identity.
              </p>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
