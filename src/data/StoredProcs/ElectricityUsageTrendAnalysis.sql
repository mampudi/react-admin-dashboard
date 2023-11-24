--------------------------------------------------------
--Trend Analysis: We can analyze the trend over time for both morning and night usage to see if there is a 
--consistent increase or decrease.


--MorningTrend: Shows the change in morning electricity usage compared to the previous day. For example, on Sat, 11-18-23, the morning usage is 287.60 units, which is 16.13 units less than the previous day (303.73 units on Fri, 11-17-23). This is why MorningTrend is -16.13.
----------------------------------------------------------

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[ElectricityUsageTrendAnalysis]
AS
BEGIN
    -- Selecting the data with trend analysis
    SELECT 
        FORMAT(Date, 'ddd, MM-dd-yy') AS Date,
        UnitMorning,
        UnitNight,
        (UnitMorning - UnitNight) as Difference,
        (UnitMorning - LAG(UnitMorning, 1) OVER (ORDER BY Date)) as MorningTrend,
        (UnitNight - LAG(UnitNight, 1) OVER (ORDER BY Date)) as NightTrend
    FROM 
        ElectricityConsumption
END;
GO

