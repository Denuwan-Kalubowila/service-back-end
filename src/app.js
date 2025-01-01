const express = require('express');
const customerRoutes = require('./routes/customerRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const sparePartsRoutes = require('./routes/partsRoutes');
const stockRoutes = require('./routes/stockRoute');

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/customer', customerRoutes);
app.use('/invoice',invoiceRoutes)
app.use('/spareParts',sparePartsRoutes)
app.use('/stock',stockRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

