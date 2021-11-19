class PagesMailer < ApplicationMailer
  default from: 'recruiter@company.com'

  def recruiter_email(name, company, subject, message)
    @name = name
    @company = company
    @message = message
    mail(to: "louisdrinkwater95@gmail.com", from: "#{name}@#{company}.com", subject: subject)
  end
end
