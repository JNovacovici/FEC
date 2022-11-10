const axios = require('axios');
const myAPIKey = process.env.myAPIKey;
// const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

const getQuestions = (productId) => {

  // return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=100`, {headers: { Authorization: myAPIKey}})
  console.log('Get Questions on reload');
  return axios.get(`http://localhost:3002/qa/questions?product_id=${productId}&count=1`, {headers: { Authorization: myAPIKey}})
    .then((results) => {
      // console.log(results.data.results[0].answers);
      console.log(results.data);
      return results.data.results;
    })
    .catch((error) => {
      console.log('ERROR', error);
      return error;
    });
};

//add question
const postQuestion = (data) => {
  let productId = Number(data.productId);

  // return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', {
  return axios.post('http://localhost:3002/qa/questions', {
    body: data.body,
    name: data.name,
    email: data.email,
    // eslint-disable-next-line camelcase
    product_id: productId
  }, {headers: { Authorization: myAPIKey}})
    .then(() => {
      return 'SUCCESS POST QUESTION IN API HELPER';
    })
    .catch((err) => {
      return err;
    });
};



//add answer
const postAnswer = (data) => {
  let questionId = Number(data.questionId);
  // return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`, {
  return axios.post(`http://localhost:3002/qa/questions/${questionId}/answers`, {
    body: data.body,
    name: data.name,
    email: data.email,
    photos: data.photos
  }, {headers: { Authorization: myAPIKey}})
    .then(() => {
      return 'SUCCESS POST ANSWER IN API HELPER';
    })
    .catch((err) => {
      return err;
    });
};

//mark question as helpful
const questionHelpful = (questionId) => {
  // return axios.put (`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/helpful`, {}, {headers: { Authorization: myAPIKey}})
  return axios.put (`http://localhost:3002/qa/questions/${questionId}/helpful`, {}, {headers: { Authorization: myAPIKey}})
    .then((res) => {
      return 'SUCCESS HELPFUL QUESTION UPDATE';
    })
    .catch((err) => {
      return 'ERROR HELPFUL QUESTION UPDATE', err;
    });
};



// mark answer as helpful
const answerHelpful = (answerId) => {
  // return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/helpful`, {}, {headers: { Authorization: myAPIKey}})
  return axios.put(`http://localhost:3002/qa/answers/${answerId}/helpful`, {}, {headers: { Authorization: myAPIKey}})
    .then(() => {
      return 'SUCCESS UPDATING ANSWER HELPFUL';
    })
    .catch((err) => {
      return 'FAILED TO UPDATE ANSWER HELPFUL';
    });
};


//mark answer for report
const reportAnswer = (answerId) => {
  // return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/report`, {}, {headers: { Authorization: myAPIKey}})
  return axios.put(`http://localhost:3002/qa/answers/${answerId}/report`, {}, {headers: { Authorization: myAPIKey}})
    .then(() => {
      return 'Answer Reported';
    })
    .catch((err) => {
      return 'FAILED TO report answer', err;
    });
};

module.exports = {
  getQuestions,
  postQuestion,
  postAnswer,
  questionHelpful,
  answerHelpful,
  reportAnswer
};