package com.zz.chart.render.bar;

import java.awt.Graphics2D;
import java.awt.Shape;
import java.awt.geom.RectangularShape;

import org.jfree.ui.RectangleEdge;


/**
 * The interface for plugin painter for the {@link BarRenderer} class.  When
 * developing a class that implements this interface, bear in mind the
 * following:
 * <ul>
 * <li>the <code>equals(Object)</code> method should be overridden;</li>
 * <li>instances of the class should be immutable OR implement the
 *     <code>PublicCloneable</code> interface, so that a renderer using the
 *     painter can be cloned reliably;
 * <li>the class should be <code>Serializable</code>, otherwise chart
 *     serialization will not be supported.</li>
 * </ul>
 *
 * @since 1.0.11
 */
public interface BarChartPainter {

    /**
     * Paints a single bar on behalf of a renderer.
     *
     * @param g2  the graphics target.
     * @param renderer  the renderer.
     * @param row  the row index for the item.
     * @param column  the column index for the item.
     * @param bar  the bounds for the bar.
     * @param base  the base of the bar.
     */
    public void paintBar(Graphics2D g2, BarChartRenderer renderer,
                         int row, int column, RectangularShape s, RectangleEdge base);

    
    public void paintBar(Graphics2D g2, BarChartRenderer renderer,
                         int row, int column, Shape s, RectangleEdge base);
    /**
     * Paints the shadow for a single bar on behalf of a renderer.
     *
     * @param g2  the graphics target.
     * @param renderer  the renderer.
     * @param row  the row index for the item.
     * @param column  the column index for the item.
     * @param bar  the bounds for the bar.
     * @param base  the base of the bar.
     * @param pegShadow  peg the shadow to the base of the bar?
     */
    public void paintBarShadow(Graphics2D g2, BarChartRenderer renderer,
                               int row, int column, RectangularShape bar, RectangleEdge base,
                               boolean pegShadow);

    public void paintBarShadow(Graphics2D g2, BarChartRenderer renderer,
                               int row, int column, Shape bar, RectangleEdge base,
                               boolean pegShadow);
}