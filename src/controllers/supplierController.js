import supplierService from '../services/supplierService.js';

const getSupplier = async (req, res) => {
  try {
    const response = await supplierService.getSupplier();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const response = await supplierService.getSupplierById(req.params.supId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createSupplier = async (req, res) => {
  const { supplier_name, supplier_phone, supplier_address, supplier_email } = req.body;


  try {
    const response = await supplierService.createSupplier({ supplier_name, supplier_phone, supplier_address, supplier_email });

    //  response
    res.status(201).json({
      message: 'Supplier created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Supplier already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateSupplier = async (req, res) => {
  const supId = req.body.supId;
  const { supplier_name, supplier_phone, supplier_address, supplier_email } = req.body;

  try {
    const response = await supplierService.updateSupplier({ supplier_name, supplier_phone, supplier_address, supplier_email }, supId);
    
    // response
    res.status(201).json({
      message: 'Supplier updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroySupplier = async (req, res) => {
  const { supId } = req.params;

  try {
    const response = await supplierService.destroySupplier(supId);
    
    // response
    res.status(200).json({
      message: 'Supplier deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getSupplier, getSupplierById, createSupplier, updateSupplier, destroySupplier };
