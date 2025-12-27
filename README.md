<!-- 📋 TO DO -->
## Frontend To-Do
~~Setup base functional table/homepage
 -- add side dash to see:
        -inventory
        -outgoing orders
        -incoming orders
        -invoices
 --add Id, name, category, pricer per unit/case, # in stock, reorder schedule, reorder amount

## API
Kroger API
<!-- https://developer.kroger.com/documentation -->
<!-- https://api.kroger.com/v1/products -->

<!-- 
       
 -->



## Backend To-Do
~Set up the database
--Make a table called inventory with columns like:
---id, name, category, quantity
-----------

-Set up an Express server.

-Create routes like:

--GET /items → fetch all items
--POST /items → add new item

--DELETE /items/:id → delete item

--Use postegresesql. //https://www.postgresql.org/

--Connect frontend
--Use a form to add new items.
--Use fetch() to call your API routes.
--Display results dynamically on the page with JS.