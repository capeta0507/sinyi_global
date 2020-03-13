// https://www.sinyi.com.tw/footer/sinyi
import axios from 'axios'

export default (req, res) => {
  axios.get('https://www.sinyi.com.tw/footer/sinyi',{} ,{})
  .then(function (response) {
    res.json(response.data)
  })
  .catch(function (error) {
    // console.log("---------ERROR----------")
    // console.log(error);
    return res.json({error:{message:error.message}})
  })

}