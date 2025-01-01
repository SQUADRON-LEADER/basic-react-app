# Basic React App

This is a simple React app that displays three products along with their original prices and new discounted prices. The app is designed to demonstrate basic React concepts such as components, props, and styling.

## Features

- Displays a list of 3 products.
- Each product shows:
  - Product name
  - Original price
  - New discounted price
- Responsive and clean UI.

## Demo

You can view the live demo of this app [here](https://SQUADRON-LEADER.github.io/basic-react-app/).


![Screenshot 2025-01-01 163041](https://github.com/user-attachments/assets/26f84238-c6d4-43c0-b05e-0d3d7c025422)


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **GitHub Pages**: For hosting the live demo.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/SQUADRON-LEADER/basic-react-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd basic-react-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── ProductCard.js
│   │   └── ProductList.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

### Components

1. **ProductCard**: Displays the details of a single product (name, original price, and new price).
2. **ProductList**: Contains a list of all product cards and passes data to the `ProductCard` component.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. Any enhancements or bug fixes are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out this project! If you have any suggestions or feedback, feel free to reach out.
