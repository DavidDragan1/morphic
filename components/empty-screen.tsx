import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'My landlord won\'t fix the leaky roof. What are my rights?',
    message: 'My landlord won\'t fix the leaky roof. What are my rights?'
  },
  {
    heading: 'Help me draft a legal letter to contest a parking ticket.',
    message: 'Help me draft a legal letter to contest a parking ticket.'
  },
  {
    heading: 'Summary: https://www.legislation.gov.uk/uksi/2025/583/pdfs/uksi_20250583_en.pdf',
    message: 'Summary: https://www.legislation.gov.uk/uksi/2025/583/pdfs/uksi_20250583_en.pdf'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-2 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
