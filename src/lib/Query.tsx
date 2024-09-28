export const QUERY_DASHBOARD = `
SELECT 
  tp.ProductID, tp.ProductName, tp.ProductPrice, tp.TotalItems, tp.SoldCount, 
  tp.WarehouseLocID AS ProductWarehouseLocID, 
  tw.WarehouseLocName, tw.WarehouseAddress, tp.VendorID AS ProductVendorID,
  tv.VendorName
FROM tbl_product tp 
LEFT JOIN tbl_warehouseloc tw ON tp.WarehouseLocID = tw.WarehouseLocID 
LEFT JOIN tbl_vendor tv ON tp.VendorID = tv.VendorID
`;