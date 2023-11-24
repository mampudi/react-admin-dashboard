SELECT
  FORMAT(Date, 'ddd, MM-dd-yy') AS FormattedDate,
  UnitMorning,
  UnitNight,
  UnitMorning - UnitNight AS Consumption
FROM ElectricityConsumption;


update  ElectricityConsumption
set UnitMorning = 191.64, unitnight = 181.27
where date = '2023-11-24'

SELECT
  FORMAT(Date, 'ddd, MM-dd-yy') AS x,
  UnitMorning - UnitNight AS y
FROM ElectricityConsumption;

select * from ElectricityConsumption




