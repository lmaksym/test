class RecommendationComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.products = [
      {
        id: 'adobe-illustrator',
        name: 'Adobe Illustrator',
        description: 'With Illustrator and generative AI, anyone can create logos, packaging designs, web graphics, and more.',
        price: '£22',
        link: '#',
        imageUrl: 'https://img.icons8.com/color/100/adobe-illustrator--v1.png'
      },
      {
        id: 'microsoft-teams',
        name: 'Microsoft Teams',
        description: "It's the only app that has communities, events, chats, channels, meetings, storage, tasks, and calendars in one place.",
        price: '£4',
        link: '#',
        imageUrl: 'https://img.icons8.com/plasticine/100/microsoft-teams-2019.png'
      },
      {
        id: 'adobe-lightroom',
        name: 'Adobe Lightroom',
        description: 'Photo editing made easy with Lightroom. Edit photos with power and precision.',
        price: '£11',
        link: '#',
        imageUrl: 'https://img.icons8.com/3d-fluency/100/adobe-lightroom.png'
      }
    ];
  }

  connectedCallback() {
    const styles = `
      <style>
        .bytes-recommendation-component {
          display: flex;
          justify-content: space-around;
          align-items: stretch;
          background: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .product {
          flex-basis: calc(33.333% - 20px);
          margin: 10px;
          background: white;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .product-image img {
          max-width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
        .product-info {
          padding: 15px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .product-info h3 {
          font-size: 1.2rem;
          color: #333;
          margin: 0 0 10px 0;
        }
        .product-info p {
          font-size: 0.9rem;
          color: #666;
          flex-grow: 1;
        }
        .price {
          font-size: 1rem;
          color: #333;
          margin: 10px 0;
        }
        .learn-more-button {
          text-decoration: none;
          background: #0078D4;
          color: white;
          padding: 10px 15px;
          text-align: center;
          border-radius: 4px;
          font-weight: bold;
          margin-top: auto; /* Pushes the button to the bottom */
        }
      </style>
    `;

    const productHtml = this.products.map(product => `
      <div class="product" id="${product.id}">
        <div class="product-image">
          <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">Monthly license starting from: ${product.price}</p>
          <a href="${product.link}" class="learn-more-button">Learn More</a>
        </div>
      </div>
    `).join('');

    this.shadowRoot.innerHTML = `${styles}
      <div class="recommendation-component">
        ${productHtml}
      </div>
    `;
  }
}

customElements.define('bytes-recommendation-component', RecommendationComponent);
