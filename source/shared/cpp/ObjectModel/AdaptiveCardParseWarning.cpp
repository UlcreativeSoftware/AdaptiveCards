#include "AdaptiveCardParseWarning.h"

using namespace AdaptiveCards;

AdaptiveCardParseWarning::AdaptiveCardParseWarning(const WarningStatusCode statusCode, const std::string & message) : m_statusCode(statusCode), m_message(message)
{
}

AdaptiveCardParseWarning::~AdaptiveCardParseWarning()
{
}

const WarningStatusCode AdaptiveCardParseWarning::GetStatusCode() const
{
    return m_statusCode;
}

const std::string& AdaptiveCardParseWarning::GetReason() const
{
    return m_message;
}