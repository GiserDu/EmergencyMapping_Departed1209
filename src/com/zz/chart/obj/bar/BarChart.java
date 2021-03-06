package com.zz.chart.obj.bar;

import com.zz.chart.chartfactory.IChart;
import com.zz.chart.chartstyle.ChartDataPara;
import com.zz.chart.chartstyle.ChartStyle;
import com.zz.chart.data.IndicatorData;
import com.zz.chart.render.bar.BarChartRenderer;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.CategoryLabelPositions;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.title.LegendTitle;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.HorizontalAlignment;
import org.jfree.ui.RectangleEdge;
import org.jfree.ui.RectangleInsets;
import org.jfree.ui.Size2D;

import java.awt.*;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.util.HashMap;


public class BarChart implements IChart {

	public void drawChart(Graphics2D g, double x, double y, int width,
			int height, ChartDataPara chartDataPara,
			ChartStyle chartStyle, double[] maxValues, double[] minValues,
			double[] averageValues, IndicatorData[] indicatorDatas) {
		// TODO Auto-generated method stub

		// 消除线条锯齿
		g.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
				RenderingHints.VALUE_ANTIALIAS_ON);

		double maxValue = maxValues[0];
		double averageValue = averageValues[0];

		double[] values;// 存放单变量多指标的值，例如存放2012年男女指标的人口数

		if (indicatorDatas[0] == null) {
			System.out.println("绘制专题符号图层时发现专题数据中区域数据不完整！");
			return;
		}
		values = indicatorDatas[0].getValues();// 因为普通柱状图只适合单变量多指标这样的数据结构，其余的不适用

		// 获取符号绘制样式
		@SuppressWarnings("unused")
		String chartID = chartStyle.getChartID();// 符号ID
		boolean drawBarOutline = chartStyle.isDrawBarOutLine();// 是否绘制柱子边线
		int outLinePaint = chartStyle.getOutLinePaint();// 柱子边线颜色
		float outLineBasicStroke = chartStyle.getOutLineBasicStroke();// 柱子边线粗细
		double itemMargin = chartStyle.getItemMargin();// 柱子间的距离，像素为单位
		boolean isLable = chartStyle.isLable();// 是否绘制标签
		System.out.println("isLable : ~~~~"+isLable);
//		boolean isLable = true;
		String itemLabelFontName = chartStyle.getItemLabelFontName();// 标签字体名称
		int itemLabelFontSize = chartStyle.getItemLabelFontSize();// 标签字体大小
		int itemLabelPaint = chartStyle.getItemLabelPaint();// 标签颜色
//		boolean isFracture = chartStyle.isFracture();
		boolean isCrack = chartStyle.isIsCrack();
		// int transparent = chartStyle.getTransparent();// 填充色透明度
		double minimumBarLength = chartStyle.getMinimumBarLength();
		boolean GradientPaint = chartStyle.isGradientPaint();
		// 处理极端数据

		HashMap<String, Color> fieldNameAndColorHashMap = new HashMap<String, Color>();
		for (int i = 0; i < chartDataPara.getFieldName().length; i++) {
			fieldNameAndColorHashMap.put(chartDataPara.getFieldName()[i],
					new Color(chartDataPara.getFieldColor()[i], false));
		}
		
		
//		double realItemMargin = itemMargin * (values.length - 1) * 1.0 / width;// 根据设置的柱子间的间距，求出所有间距之和占据绘图区域宽度的百分比
//		double barWidth = (width * (1 - realItemMargin) / values.length);
		double realItemMargin = itemMargin/minimumBarLength*(values.length-1);
		double barWidth = width/(values.length+realItemMargin);
		       itemMargin = itemMargin/minimumBarLength*barWidth;
		if (barWidth > width * 0.51) {
			barWidth = width * 0.51;
		}
		if (maxValue > (averageValue * 4) && isCrack) {
			maxValue = averageValue * 4 * (1 + 1.0 / 9);//加1/9，是为了在所给的绘图区域呢留下空间来放标注
		} else {
			maxValue = maxValue * (1 + 1.0 / 9);
		}
		for (int i = 0; i < values.length; i++) {
			if (values[i] > (averageValue * 4)&&isCrack) {
				int barX0 = 0;
				if (barWidth < width * 0.51) {
					barX0 = (int) x - (int) (width / 2)
							+ (int) (barWidth + itemMargin) * i;
				} else {
					barX0 = (int) (x - width * 0.51 / 2);
				}
				int barHeight = (int) (0.8 * height);// 断裂前80%
				int innerHeight = (int) (0.02 * height);// 锯齿高度
				int innerWidth = (int) (barWidth / 3);// 锯齿宽度
				int barY0 = (int) y;

				int[] xpointsDown = { barX0, barX0, barX0 + innerWidth,
						barX0 + 2 * innerWidth, barX0 + (int) barWidth,
						barX0 + (int) barWidth };
				int[] ypointsDown = { barY0, barY0 - barHeight,
						barY0 - barHeight + innerHeight, barY0 - barHeight,
						barY0 - barHeight + innerHeight, barY0 };
				int npointsDown = xpointsDown.length;
				Polygon polygonDown = new Polygon(xpointsDown, ypointsDown,
						npointsDown);

				barHeight = barHeight + innerHeight;
				int[] xpointsUp = { barX0, barX0, barX0 + innerWidth,
						barX0 + 2 * innerWidth, barX0 + (int) barWidth,
						barX0 + (int) barWidth };
				int[] ypointsUp = { barY0 - (int) (0.9 * height),
						barY0 - barHeight, barY0 - barHeight + innerHeight,
						barY0 - barHeight, barY0 - barHeight + innerHeight,
						barY0 - (int) (0.9 * height) };
				int npointsUp = xpointsUp.length;
				Polygon polygonUP = new Polygon(xpointsUp, ypointsUp, npointsUp);
				//设置填充颜色
				if(GradientPaint){
				 GradientPaint gradientPaint = new GradientPaint((float)
				 barX0,
				 (float) (barY0), fieldNameAndColorHashMap
				 .get(chartDataPara.getFieldName()[i]),
				 (float) (barX0 + barWidth / 2), (float) (barY0),
				 new Color(255, 255, 255), true);
				 g.setPaint(gradientPaint);
				}else {
					g.setColor(fieldNameAndColorHashMap.get(chartDataPara
							.getFieldName()[i]));
				}
				
				g.fill(polygonUP);
				g.fill(polygonDown);

				// 断裂处理的必须标上标签
				Font font = new Font(itemLabelFontName, Font.PLAIN,
						itemLabelFontSize);
				g.setColor(new Color(itemLabelPaint, false));
				g.setFont(font);
				g.drawString(Float.toString((float) values[i]), (int) barX0,
						(int) barY0 - (int) (0.9 * height));

				if (drawBarOutline) {

					g.setColor(new Color(outLinePaint, false));
					BasicStroke basicStroke = new BasicStroke(
							outLineBasicStroke);
					g.setStroke(basicStroke);
					g.draw(polygonUP);
					g.draw(polygonDown);
				}

			} else {
				int barX0 = 0;
				if (barWidth < width * 0.51) {
					barX0 = (int) x - (int) (width / 2)
							+ (int) (barWidth + itemMargin) * i;
				} else {
					barX0 = (int) (x - width * 0.51 / 2);
				}
				double barY0 = y + height/2;
				double barHeight = values[i] / maxValue * height;
				// if (barHeight < minimumBarLength) {
				// barHeight = minimumBarLength;
				// }
				Rectangle2D.Double bar = new Rectangle2D.Double(barX0, barY0
						- barHeight, barWidth, barHeight);
				//设置填充颜色
				if(GradientPaint){
				 GradientPaint gradientPaint = new GradientPaint((float)
				 barX0,
				 (float) (barY0), fieldNameAndColorHashMap
				 .get(chartDataPara.getFieldName()[i]),
				 (float) (barX0 + barWidth / 2), (float) (barY0),
				 new Color(255, 255, 255), true);
				 g.setPaint(gradientPaint);
				}else {
					g.setColor(fieldNameAndColorHashMap.get(chartDataPara
							.getFieldName()[i]));
				}
				g.fill(bar);
				if (isLable) {
					Font font = new Font(itemLabelFontName, Font.PLAIN,
							itemLabelFontSize);
					g.setColor(new Color(itemLabelPaint, false));
					g.setFont(font);
					g.drawString(Float.toString((float) values[i]), barX0,
							(int) (barY0 - barHeight));
				}
				if (drawBarOutline) {
					g.setColor(new Color(outLinePaint, false));
					BasicStroke basicStroke = new BasicStroke(
							outLineBasicStroke);
					g.setStroke(basicStroke);
					g.draw(bar);
				}
			}
		}

	}

	public BufferedImage drawLegend(int width, int height,
			ChartDataPara chartDataPara, ChartStyle chartStyle,
			double[] maxValues, double[] minValues, double[] averageValues,
			IndicatorData[] indicatorDatas) {
		// TODO Auto-generated method stub
		boolean isCrack = chartStyle.isIsCrack();
//		boolean isFracture = chartStyle.isFracture();
		double maxValue = maxValues[0];
		double averageValue = averageValues[0];
		if (maxValue > (averageValue * 4) && isCrack) {
			maxValue = averageValue * 4 * (1 + 1.0 / 9);
		} else {
			maxValue = maxValue * (1 + 1.0 / 9);
		}

		String[] domainAxisList = new String[indicatorDatas.length];
		for (int i = 0; i < domainAxisList.length; i++) {
			domainAxisList[i] = indicatorDatas[i].getDomainAxis();
		}
		String domainAxisUnit = chartDataPara.getDomainAxisUnit();
		String[] fieldUnits = chartDataPara.getFieldUnits();

		DefaultCategoryDataset categoryDataset = new DefaultCategoryDataset();
		String[] seriesList = chartDataPara.getFieldName();
		for (int i = 0; i < seriesList.length; i++) {
			for (int j = 0; j < domainAxisList.length; j++) {
				categoryDataset.addValue(maxValue, seriesList[i], String
						.valueOf(domainAxisList[j])
						+ domainAxisUnit);
			}
		}
		// 获取符号绘制样式
		// int transparent = chartStyle.getTransparent();// 填充色透明度

		HashMap<String, Color> hashMap = new HashMap<String, Color>();
		for (int i = 0; i < chartDataPara.getFieldColor().length; i++) {
			hashMap.put(chartDataPara.getFieldName()[i], new Color(
					chartDataPara.getFieldColor()[i], false));
		}

		JFreeChart barLegendChart = this.setBarLegend(chartStyle,
				categoryDataset, chartDataPara, maxValue, indicatorDatas,
				"", "", "", hashMap);
		barLegendChart.setBackgroundPaint(null);
		// BufferedImage barLegendImg = barLegendChart
		// .createBufferedImage((int) (100 + width),
		// (int) (height + 30),BufferedImage.TYPE_INT_ARGB, null);
		BufferedImage barLegendImg = new BufferedImage((int) (100 + width),
				(int) (height -30), BufferedImage.TYPE_INT_ARGB);
		Graphics2D g2MainLegend = barLegendImg.createGraphics();
		Rectangle2D.Double rectangleDouble = new Rectangle2D.Double(0, 0,
				(int) (100 + width), (int) (height -30));
		barLegendChart.draw(g2MainLegend, rectangleDouble);

		// 绘制标题，构成，留空，后面完
		TextTitle textTitle = barLegendChart.getTitle();
		textTitle.setText("统计图图例");
		textTitle.setFont(new Font("黑体", Font.PLAIN, 18));
		textTitle.setMargin(1, 1, 1, 1);
		BufferedImage imgTitle = new BufferedImage(1, 1,
				BufferedImage.TYPE_INT_ARGB);
		Graphics2D g2Title = imgTitle.createGraphics();
		Size2D sizeTitle = textTitle.arrange(g2Title);
		g2Title.dispose();
		int wTitle = (int) Math.rint(sizeTitle.width);
		int hTitle = (int) Math.rint(sizeTitle.height);

		// 绘制单位
		TextTitle unitTitle = new TextTitle();
		if ((fieldUnits[0] != null) && (!(fieldUnits[0].length() == 0))) {
			unitTitle.setText("单位：" + "（" + fieldUnits[0] + "）");
		} else {
			unitTitle.setText("");
		}
		unitTitle.setFont(new Font("黑体", Font.PLAIN, 16));
		unitTitle.setMargin(1, 1, 1, 1);
		BufferedImage imgUnit = new BufferedImage(1, 1,
				BufferedImage.TYPE_INT_ARGB);
		Graphics2D g2Unit = imgUnit.createGraphics();
		Size2D sizeUnit = unitTitle.arrange(g2Unit);
		g2Unit.dispose();
		int wUnite = (int) Math.rint(sizeUnit.width);
		int hUnit = (int) Math.rint(sizeUnit.height);

		// 绘制图例
		LegendTitle legend = new LegendTitle(barLegendChart.getPlot());
		legend.setItemFont(new Font("黑体", Font.PLAIN, 15));
		legend.setMargin(1, 1, 1, 1);
		legend.setPosition(RectangleEdge.RIGHT);
		legend.setHorizontalAlignment(HorizontalAlignment.RIGHT);
		BufferedImage img = new BufferedImage(1, 1, BufferedImage.TYPE_INT_ARGB);
		Graphics2D g2 = img.createGraphics();
		Size2D size = legend.arrange(g2);
		g2.dispose();
		int w = (int) Math.rint(size.width);
		int h = (int) Math.rint(size.height);

		int maxW1 = Math.max(wTitle, wUnite);
		int maxW2 = Math.max(wTitle, w);
		int maxW3 = Math.max(maxW1, maxW2);
		int maxW = Math.max(maxW3, barLegendImg.getWidth());

		int maxH = hTitle + hUnit + h + barLegendImg.getHeight();

		BufferedImage image = new BufferedImage(maxW, maxH,
				BufferedImage.TYPE_INT_ARGB);
		Graphics2D g2d = (Graphics2D) image.createGraphics();
		// g2d.setBackground(Color.WHITE);
		// g2d.clearRect(0, 0, image.getWidth(), image.getHeight());
		g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
				RenderingHints.VALUE_ANTIALIAS_ON);

		textTitle.draw(g2d, new Rectangle2D.Double(
				(image.getWidth() - wTitle) / 2, 0, wTitle, hTitle));
		unitTitle.draw(g2d, new Rectangle2D.Double(
				(image.getWidth() - wUnite) / 2, hTitle, wUnite + 50, hUnit));
		// 绘制bar图
		g2d.drawImage(barLegendImg,
				(image.getWidth() - barLegendImg.getWidth()) / 2, hTitle
						+ hUnit, barLegendImg.getWidth(), barLegendImg
						.getHeight(), null);
		legend.draw(g2d, new Rectangle2D.Double((image.getWidth() - w) / 2,
				barLegendImg.getHeight() + hTitle + hUnit, w, h));

//		g2d.drawRect(0, 0, image.getWidth() - 1, image.getHeight() - 1);
		g2d.dispose();
		return image;
	}

	public JFreeChart setBarLegend(ChartStyle chartStyle,
			DefaultCategoryDataset categoryDataset2,
			ChartDataPara chartDataPara, double maxValue,
			IndicatorData[] indicatorDatas, String titleName, String xUnit,
			String yUnit, HashMap<String, Color> hashMap) {
		CategoryDataset categoryDataset = (CategoryDataset) categoryDataset2;
		JFreeChart barChart = ChartFactory.createBarChart(titleName, // 图表标题
				// chart
				// title
				xUnit, // 横坐标标题 domain axis label
				yUnit, // 纵坐标标题 range axis label
				categoryDataset, // 定义绘制数据 data
				PlotOrientation.VERTICAL, // 直方图的方向 orientation
				false, // 定义图表是否包含图例 include legend
				false, // 定义图表是否包含提示 tooltips?
				false // 定义图表是否包含URL URLs?
				);

		// 获取符号绘制样式
		@SuppressWarnings("unused")
		String chartID = chartStyle.getChartID();// 符号ID
		boolean drawBarOutline = chartStyle.isDrawBarOutLine();// 是否绘制柱子边线
		int outLinePaint = chartStyle.getOutLinePaint();// 柱子边线颜色
		float outLineBasicStroke = chartStyle.getOutLineBasicStroke();// 柱子边线粗细

		CategoryPlot plot = barChart.getCategoryPlot();
		// GradientPaint plotBg =new GradientPaint(0,0, new
		// Color(248,253,255),0,0,new Color(205,237,252));
		plot.setBackgroundPaint(null);
		plot.setOutlineVisible(false);
		plot.setDomainGridlinesVisible(false);
		plot.setRangeGridlinesVisible(false);
		plot.setAxisOffset(RectangleInsets.ZERO_INSETS);

		// 定义是否绘制轮廓线
		BarChartRenderer renderer = new BarChartRenderer();

		renderer.setDrawBarOutline(drawBarOutline);
		if (drawBarOutline) {
			renderer.setBaseOutlinePaint(new Color(outLinePaint, false));// 设置柱子边线颜色
			BasicStroke basicStroke = new BasicStroke(outLineBasicStroke);
			renderer.setBaseOutlineStroke(basicStroke);// 设置柱子边线宽度
		}
		for (int i = 0; i < chartDataPara.getFieldName().length; i++) {
			renderer.setSeriesPaint(i, hashMap.get(chartDataPara
					.getFieldName()[i]));
		}

		// renderer.setBarPainter(new StandardBarPainter());
		renderer.setGradientPaintTransformer(null);


		renderer.setShadowVisible(false);
		plot.setRenderer(renderer);

		// ----设置横轴(类别)标题文字的字体及旋转方向
		CategoryAxis domainAxis = plot.getDomainAxis();
		// 设置横轴标题文字字体
		domainAxis.setLabelFont(new Font("宋体", Font.PLAIN, 15));
		// 设置横坐标字体
		domainAxis.setTickLabelFont(new Font("黑体", Font.PLAIN, 15));
		domainAxis.setLowerMargin(0.05);
		domainAxis.setUpperMargin(0.01);
		domainAxis.setCategoryLabelPositions(CategoryLabelPositions.STANDARD);

		// ----设置纵轴（值）标题文字的字体及旋转方向
		ValueAxis rangeAxis = plot.getRangeAxis();
		// 设置横轴标题文字字体
		rangeAxis.setLabelFont(new Font("宋体", Font.BOLD, 15));
		// 设置横坐标字体
		rangeAxis.setTickLabelFont(new Font("黑体", Font.PLAIN, 15));
		rangeAxis.setRange(0, maxValue);
		return barChart;
	}

	public HashMap<String, Shape> generateHotArea(double x, double y,
			int width, int height, ChartDataPara chartDataPara,
			ChartStyle chartStyle, double[] maxValues, double[] minValues,
			double[] averageValues, IndicatorData[] indicatorDatas){
		double maxValue = maxValues[0];
		double averageValue = averageValues[0];
		if (indicatorDatas[0] == null) {
			System.out.println("获取专题符号图层热区时发现专题数据中区域数据不完整！");
			return null;
		}

		double[] values;// 存放单变量多指标的值，例如存放2012年男女指标的人口数

		values = indicatorDatas[0].getValues();// 因为普通柱状图只适合单变量多指标这样的数据结构，其余的不适用

//		boolean isFracture = chartStyle.isFracture();
		boolean isCrack = chartStyle.isIsCrack();
		if (maxValue > (averageValue * 4)&&isCrack) {
			maxValue = averageValue * 4 * (1 + 1.0 / 9);
		} else {
			maxValue = maxValue * (1 + 1.0 / 9);
		}

		// 获取符号绘制样式
		@SuppressWarnings("unused")
		String chartID = chartStyle.getChartID();// 符号ID
		// double minimumBarLength = chartStyle.getMinimumBarLength();// 百分比
		double itemMargin = chartStyle.getItemMargin();// 柱子间的距离，像素为单
		double minimumBarLength = chartStyle.getMinimumBarLength();
		// 处理极端数据

//		double realItemMargin = itemMargin * (values.length - 1) * 1.0 / width;// 根据设置的柱子间的间距，求出所有间距之和占据绘图区域宽度的百分比
//		double barWidth = (width * (1 - realItemMargin) / values.length);
		double realItemMargin = itemMargin/minimumBarLength*(values.length-1);
		double barWidth = width/(values.length+realItemMargin);
		 itemMargin = itemMargin/minimumBarLength*barWidth;
		if (barWidth > width * 0.51) {
			barWidth = width * 0.51;
		}

		HashMap<String, Shape> hotAreahHashMap = new HashMap<String, Shape>();
		for (int i = 0; i < values.length; i++) {
			Shape rectangleDouble = new Rectangle2D.Double();
			if (values[i] > (averageValue * 4)&&isCrack) {
				int barX0 = 0;
				if (barWidth < width * 0.51) {
					barX0 = (int) x - (int) (width / 2)
							+ (int) (barWidth + itemMargin) * i;
				} else {
					barX0 = (int) (x - width * 0.51 / 2);
				}
				int barY0 = (int) y;
				rectangleDouble = new Rectangle2D.Double(barX0, barY0
						- (int) (0.9 * height), barWidth, (int) (0.9 * height));
			} else {
				int barX0 = 0;
				if (barWidth < width * 0.51) {
					barX0 = (int) x - (int) (width / 2)
							+ (int) (barWidth + itemMargin) * i;
				} else {
					barX0 = (int) (x - width * 0.51 / 2);
				}
				double barY0 = y;
				double barHeight = values[i] / maxValue * height;
				// if (barHeight < minimumBarLength) {
				// barHeight = minimumBarLength;
				// }
				rectangleDouble = new Rectangle2D.Double(barX0, barY0
						- barHeight, barWidth, barHeight);

			}

			String text = "";
			if (chartDataPara.getDomainAxis()[0] == null
					|| (chartDataPara.getDomainAxis()[0].length() == 0)) {
				text = "(" + indicatorDatas[0].getNames()[i] + ")="
						+ indicatorDatas[0].getValues()[i];
			} else {
				text = "(" + chartDataPara.getDomainAxis()[0] + ","
						+ indicatorDatas[0].getNames()[i] + ")="
						+ indicatorDatas[0].getValues()[i];
			}

			hotAreahHashMap.put(text, rectangleDouble);

		}
		return hotAreahHashMap;

	}

}
