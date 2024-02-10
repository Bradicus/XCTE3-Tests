class Address
  attr_accessor :id,  :street_1,  :street_2,  :city,  :state,  :country,  :zip_code
  
  @id
  @street_1 = Array.new(ARRAYSZ_STREET 1)
  @street_2 = Array.new(ARRAYSZ_STREET 2)
  @city = Array.new(ARRAYSZ_CITY)
  @state = Array.new(ARRAYSZ_STATE)
  @country = Array.new(ARRAYSZ_COUNTRY)
  @zip_code = Array.new(ARRAYSZ_ZIP CODE)
end

