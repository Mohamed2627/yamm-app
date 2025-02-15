/* 
I used to use this way for defining the keys of models or names of Form values in enum.
I use this approach to handle cases in which there is no clear and final docs with the backend.  
Also, sometimes the name of the filed is changed from the backend side, So with this approach, I can just change the value here
and it will be reflected in other places where we use the keys of this model. 
*/

export enum REFUND_ORDER {
  ID = 'id',
  REASON = 'reason',
  STORE_NAME = 'store_name',
  STORE_LOGO = 'store_logo',
  STORE_URL = 'store_url',
  AMOUNT = 'amount',
  ACTIVE = 'active',
  DECISION = 'decision',
  ITEMS = 'items',
  ACTIONS = 'actions',
}