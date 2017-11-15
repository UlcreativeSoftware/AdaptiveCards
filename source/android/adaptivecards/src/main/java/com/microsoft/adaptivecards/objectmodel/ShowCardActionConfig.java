/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 3.0.8
 *
 * Do not make changes to this file unless you know what you are doing--modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package com.microsoft.adaptivecards.objectmodel;

public class ShowCardActionConfig {
  private transient long swigCPtr;
  protected transient boolean swigCMemOwn;

  protected ShowCardActionConfig(long cPtr, boolean cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = cPtr;
  }

  protected static long getCPtr(ShowCardActionConfig obj) {
    return (obj == null) ? 0 : obj.swigCPtr;
  }

  protected void finalize() {
    delete();
  }

  public synchronized void delete() {
    if (swigCPtr != 0) {
      if (swigCMemOwn) {
        swigCMemOwn = false;
        AdaptiveCardObjectModelJNI.delete_ShowCardActionConfig(swigCPtr);
      }
      swigCPtr = 0;
    }
  }

  public void setActionMode(ActionMode value) {
    AdaptiveCardObjectModelJNI.ShowCardActionConfig_actionMode_set(swigCPtr, this, value.swigValue());
  }

  public ActionMode getActionMode() {
    return ActionMode.swigToEnum(AdaptiveCardObjectModelJNI.ShowCardActionConfig_actionMode_get(swigCPtr, this));
  }

  public void setStyle(ContainerStyle value) {
    AdaptiveCardObjectModelJNI.ShowCardActionConfig_style_set(swigCPtr, this, value.swigValue());
  }

  public ContainerStyle getStyle() {
    return ContainerStyle.swigToEnum(AdaptiveCardObjectModelJNI.ShowCardActionConfig_style_get(swigCPtr, this));
  }

  public void setInlineTopMargin(long value) {
    AdaptiveCardObjectModelJNI.ShowCardActionConfig_inlineTopMargin_set(swigCPtr, this, value);
  }

  public long getInlineTopMargin() {
    return AdaptiveCardObjectModelJNI.ShowCardActionConfig_inlineTopMargin_get(swigCPtr, this);
  }

  public static ShowCardActionConfig Deserialize(SWIGTYPE_p_Json__Value json, ShowCardActionConfig defaultValue) {
    return new ShowCardActionConfig(AdaptiveCardObjectModelJNI.ShowCardActionConfig_Deserialize(SWIGTYPE_p_Json__Value.getCPtr(json), ShowCardActionConfig.getCPtr(defaultValue), defaultValue), true);
  }

  public ShowCardActionConfig() {
    this(AdaptiveCardObjectModelJNI.new_ShowCardActionConfig(), true);
  }

}
