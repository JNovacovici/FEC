import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductOverview from './components/overview/ProductOverview.jsx';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews.jsx';
import RelatedAndOutfit from './components/relatedItems/index.jsx';
import QuestionsAnswersMain from './components/questionsAndAnswers/components/QuestionsAnswersMain.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 71697,
      productInfo: null
    };
  }

  componentDidMount() {
    this.updateProduct(this.state.productId);
  }

  updateProduct(productId) {
    var query = {productId: productId};
    $.ajax({
      url: '/products/:product_id',
      type: 'POST',
      data: query,
      success: (data) => {
        console.log('THIS IS MY DATA!', data);
        this.setState({
          productId: productId,
          productInfo: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Atelier</h1>
        <ProductOverview productInfo={this.state.productInfo}/>
        {/* <RatingsAndReviews /> */}
        {/* <QuestionsAnswersMain productId={this.state.productId} key={this.state.productId} /> */}
        {/* <RelatedAndOutfit prodID={this.state.productId} /> */}
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

export default App;
