json.array!(@components) do |component|
  json.extract! component, :id, :referencia, :revisado, :localizacion, :tipo, :cpu, :ram
  json.url component_url(component, format: :json)
end
