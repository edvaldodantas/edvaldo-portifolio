import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Instagram,
  Facebook,
  AtSign,
  Linkedin,
  Send,
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/src/data/contact';
import {
  buildTelUrl,
  buildWhatsAppUrl,
  copyTextToClipboard,
} from '@/src/lib/utils';
import { SectionHeader } from '@/src/components/ui/SectionHeader';

const INQUIRY_TOPICS = [
  'Full Stack / Backend Role',
  'Software Project Collaboration',
  'Technical Inquiry',
];

function SocialIcon({ id }: { id: string }) {
  const iconClass = 'h-4 w-4 text-[#60A5FA]';
  switch (id) {
    case 'instagram':
      return <Instagram className={iconClass} aria-hidden="true" />;
    case 'facebook':
      return <Facebook className={iconClass} aria-hidden="true" />;
    case 'threads':
      return <AtSign className={iconClass} aria-hidden="true" />;
    case 'linkedin':
      return <Linkedin className="h-4 w-4 text-[#A1A1AA]" aria-hidden="true" />;
    default:
      return <ExternalLink className={iconClass} aria-hidden="true" />;
  }
}

export function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [senderName, setSenderName] = useState('');
  const [messageText, setMessageText] = useState('');
  const [messageCopied, setMessageCopied] = useState(false);

  const handleCopy = async (key: string, value: string) => {
    const ok = await copyTextToClipboard(value);
    if (ok) {
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((prev) => (prev === key ? null : prev));
      }, 2000);
    }
  };

  const formattedMessage = [
    `Hello Edvaldo,`,
    senderName.trim() ? `My name is ${senderName.trim()}.` : null,
    `Topic: ${topic}`,
    messageText.trim()
      ? messageText.trim()
      : 'I would like to discuss an engineering opportunity or collaboration.',
  ]
    .filter(Boolean)
    .join('\n');

  const handleCopyInquiry = async () => {
    const ok = await copyTextToClipboard(formattedMessage);
    if (ok) {
      setMessageCopied(true);
      window.setTimeout(() => setMessageCopied(false), 2000);
    }
  };

  const whatsappDirectHref = buildWhatsAppUrl(
    CONTACT_CONFIG.whatsapp.number,
    formattedMessage
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          title="Contact"
          subtitle="Open to engineering roles, technical collaborations, and software architecture conversations."
          headingId="contact-heading"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Direct Channels & Social Links */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-6">
              <h3 className="font-display text-lg font-semibold text-[#FAFAFA]">
                Direct Channels
              </h3>
              <p className="mt-1 text-sm text-[#A1A1AA]">
                Reach out directly by phone or WhatsApp for quick responses.
              </p>

              <div className="mt-6 space-y-3">
                {/* Phone (Separate configurable entry) */}
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#27272A] bg-[#09090B] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#60A5FA]">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#A1A1AA]">Phone</p>
                      <a
                        href={buildTelUrl(CONTACT_CONFIG.phone.dialValue)}
                        className="font-mono text-sm font-medium text-[#FAFAFA] tabular-nums transition-colors hover:text-[#60A5FA]"
                      >
                        {CONTACT_CONFIG.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={buildTelUrl(CONTACT_CONFIG.phone.dialValue)}
                      className="inline-flex min-h-[36px] items-center rounded-lg border border-[#27272A] bg-[#18181B] px-3 py-1.5 text-xs font-medium text-[#FAFAFA] transition-colors hover:border-[#3B82F6]"
                    >
                      Call
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy('phone', CONTACT_CONFIG.phone.display)
                      }
                      aria-label="Copy phone number"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#A1A1AA] transition-colors hover:border-[#3B82F6] hover:text-[#FAFAFA]"
                    >
                      {copiedKey === 'phone' ? (
                        <Check className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                {/* WhatsApp (Separate configurable entry) */}
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#27272A] bg-[#09090B] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#60A5FA]">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#A1A1AA]">
                        WhatsApp
                      </p>
                      <a
                        href={buildWhatsAppUrl(CONTACT_CONFIG.whatsapp.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-medium text-[#FAFAFA] tabular-nums transition-colors hover:text-[#60A5FA]"
                      >
                        {CONTACT_CONFIG.whatsapp.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={buildWhatsAppUrl(CONTACT_CONFIG.whatsapp.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[36px] items-center rounded-lg bg-[#3B82F6] px-3 py-1.5 text-xs font-semibold text-[#FAFAFA] transition-colors hover:bg-[#60A5FA] hover:text-[#09090B]"
                    >
                      Message
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy('whatsapp', CONTACT_CONFIG.whatsapp.display)
                      }
                      aria-label="Copy WhatsApp number"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#A1A1AA] transition-colors hover:border-[#3B82F6] hover:text-[#FAFAFA]"
                    >
                      {copiedKey === 'whatsapp' ? (
                        <Check className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-6">
              <h3 className="font-display text-lg font-semibold text-[#FAFAFA]">
                Social Profiles
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {CONTACT_CONFIG.socials.map((social) =>
                  social.url ? (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#27272A] bg-[#09090B] p-4 transition-colors duration-150 hover:border-[#3B82F6]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <SocialIcon id={social.id} />
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-[#A1A1AA]">
                            {social.platform}
                          </p>
                          <p className="truncate text-sm font-medium text-[#FAFAFA]">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      <ExternalLink
                        className="h-3.5 w-3.5 shrink-0 text-[#A1A1AA]"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <div
                      key={social.id}
                      className="flex items-center justify-between rounded-xl border border-dashed border-[#27272A] bg-[#09090B]/70 p-4"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <SocialIcon id={social.id} />
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-[#A1A1AA]">
                            {social.platform}
                          </p>
                          <p className="truncate text-xs text-[#A1A1AA]">
                            {social.placeholderLabel ?? social.handle}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Direct Inquiry Composer */}
          <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-6 sm:p-8 lg:col-span-6">
            <h3 className="font-display text-lg font-semibold text-[#FAFAFA]">
              Send a Quick Message
            </h3>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              Compose a message to open directly in WhatsApp or copy to your
              clipboard.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 space-y-5"
            >
              <div>
                <span className="block text-xs font-mono text-[#A1A1AA]">
                  Inquiry Topic
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {INQUIRY_TOPICS.map((item) => {
                    const active = topic === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        className={`rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                          active
                            ? 'bg-[#3B82F6] text-[#FAFAFA]'
                            : 'border border-[#27272A] bg-[#09090B] text-[#A1A1AA] hover:border-[#3B82F6]/60 hover:text-[#FAFAFA]'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-[#A1A1AA]"
                >
                  Your Name (optional)
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Recruiter, founder, or collaborator name"
                  className="mt-2 w-full rounded-lg border border-[#27272A] bg-[#09090B] px-3.5 py-2.5 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA]/50 focus:border-[#3B82F6] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-[#A1A1AA]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Share details about a role, backend system, or project collaboration..."
                  className="mt-2 w-full resize-y rounded-lg border border-[#27272A] bg-[#09090B] px-3.5 py-2.5 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA]/50 focus:border-[#3B82F6] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={whatsappDirectHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#3B82F6] px-5 py-2.5 text-xs font-semibold text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:bg-[#60A5FA] hover:text-[#09090B]"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Open in WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#27272A] bg-[#09090B] px-5 py-2.5 text-xs font-medium text-[#FAFAFA] whitespace-nowrap shrink-0 transition-colors hover:border-[#3B82F6]"
                >
                  {messageCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                      <span>Copied Message</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#A1A1AA]" aria-hidden="true" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
