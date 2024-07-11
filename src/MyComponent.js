import axios from 'axios';

class MyComponent extends Component {
  componentDidMount() {
    axios.get('http://localhost:8081/api/data')
      .then(response => {
        console.log(response.data);
        // Burada gelen veriyi state'e veya başka bir yere kaydedebilirsiniz.
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchData}>Veri Getir</button>
      </div>
    );
  }
}

export default MyComponent;
